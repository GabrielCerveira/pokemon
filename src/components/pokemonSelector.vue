<template>
  <div class="component">
    <q-select
      borderless
      bg-color="white"
      :model=model
      :options="data"
      placeholder="Pokemon"
      color="teal"
      use-input
      hide-bottom-space="false"
      hide-selected
      fill-input
      dense
      hide-dropdown-icon
      @filter="filterFn"
      options-selected-class="text-deep-orange"
      input-class="component__input q-pa-xs"
      class="component__selector full-width"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" @blur="insertPokemonArray(scope.opt)">
          <q-item-section avatar>
            <div  class="q-ml-md flex flex-center">
              <div class="text-center flex flex-center text-whitePokebola">
                <img
                class="absolute"
                :src=url+scope.opt.id+png
                style="height: 60px; width: 60px"
                />
              </div>
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-capitalize">{{ scope.opt.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { ref } from 'vue'
import queriesPokemon from 'src/graphqlConsultas/QueriesPokemon'

export default {
  name: 'pokemonSelector',

  setup () {
    const { getPokemonComplet } = queriesPokemon()

    const data = ref([{}])
    const model = ref([{}])
    const pokemonArray = ref([{}])
    // const search = ref()
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const png = '.png'

    // Busca as informações do pokemon, através do nome dele
    const handleGetPokemonComplet = async (name) => {
      try {
        const data = await getPokemonComplet(name)
        return data
      } catch (error) {
        alert(error.message)
      }
    }

    // Adiciona o pokemon ao array
    const insertPokemonArray = async (val) => {
      const valor = {
        id: val.id,
        generation: val.generation_id,
        title: val.name,
        type: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        type2: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.at(-1).pokemon_v2_type.name,
        height: (val.pokemon_v2_pokemons[0].height * 0.1).toFixed(1).replace('.', ','),
        weight: (val.pokemon_v2_pokemons[0].weight * 0.1).toFixed(1).replace('.', ','),
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + val.id + '.png'
      }
      pokemonArray.value.push(valor)
    }

    const filterFn = (val, update, abort) => {
      if (val.length < 3) {
        abort()
        return
      }

      update(async () => {
        const response = await handleGetPokemonComplet(val.toLowerCase())
        data.value = response.data.pokemon_v2_pokemonspecies
        // search.value = response.data.pokemon_v2_pokemonspecies
      })
    }
    return {
      filterFn,
      insertPokemonArray,
      pokemonArray,
      model,
      // search,
      data,
      url,
      png
    }
  }
}
</script>

<style lang="scss" scoped>
.component__selector{
  outline: none;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: -2px 3px 0 #888, -3px 5px 0 #333;
}

.component__input{
  font-weight: 600;
  color: $graySelector;
  font-size: clamp(8px, 5vw, 1rem);

}
</style>
