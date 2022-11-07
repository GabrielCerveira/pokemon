<template>
  <div class="component">
    <q-select
      borderless
      bg-color="white"
      :model=model
      :options="data"
      :disable="disable"
      placeholder="Pokemon"
      color="teal"
      use-input
      hide-bottom-space
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
        <q-item v-bind="scope.itemProps" @click="$emit('testeEmit',scope.opt)">
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
  emits: ['testeEmit'],
  props: {
    disable: {
      type: Boolean
    }
  },

  setup () {
    const { getPokemonComplet } = queriesPokemon()

    const data = ref([{}])
    const model = ref([{}])
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
