<template>
  <q-page class="flex flex-center">
    <div class="column flex flex-center">
      <div class="q-pa-md ">
        <q-btn
        label="Teste"
        @blur="handleGetPokemonCompletID()"
        />
        <div class="q-gutter-md">
          <q-select
            outlined
            rounded
            :model="model"
            :options="data"
            label="Informe o Pokemon"
            color="teal"
            use-input
            hide-selected
            fill-input
            @filter="filterFn"
            options-selected-class="text-deep-orange"
            style="width: 500px;"
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
                  <q-item-label>{{ scope.opt.name }}</q-item-label>
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

      <div v-if="loading" class="flex flex-center"
      style="height: 400px; width: 100%;"
      >
        <q-spinner
          color="primary"
          size="6em"
        />
      </div>
      <q-scroll-area
      style="height: 400px; width: 100%;"
      v-if="!loading"
      >

      <div class="column reverse">
        <ShowChosenCharacter
        v-for="pokemonArray in pokemonArray"
        :key="pokemonArray.id"
        :img="pokemonArray.image"
        :title="pokemonArray.title"
        :type1="pokemonArray.type"
        :type2="pokemonArray.type2"
        :height="pokemonArray.height"
        :weight="pokemonArray.peso"
        :generation="pokemonArray.generation"
        />
      </div>
      </q-scroll-area>
    </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ShowChosenCharacter from 'src/components/showChosenCharacter.vue'
import queriesPokemon from 'src/graphqlConsultas/QueriesPokemon'

export default defineComponent({
  name: 'IndexPage',
  components: { ShowChosenCharacter },

  setup () {
    const { getPokemonComplet, getIDPokemon, getPokemonCompletID } = queriesPokemon()

    const model = ref(null)
    const IDs = ref()
    const ID = ref()
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const png = '.png'
    const data = ref([{}])
    const search = ref([{}])
    const pokemonArray = ref([{}])
    const pokemonSelect = ref([{}])
    const loading = ref(false)

    // Busca todos os IDs dos pokemons
    const handleGetIDPokemon = async () => {
      try {
        const data = await getIDPokemon()
        IDs.value = data.data
        handleIDRandom2()
        return
      } catch (error) {
        alert(error.message)
      }
    }

    handleGetIDPokemon()

    // Sorteia um ID aleatório
    const handleIDRandom = async () => {
      ID.value = Math.floor(Math.random() * IDs.value.pokemon_v2_pokemonspecies.length)
      console.log('Id random: ' + ID.value)
      return ID.value
    }

    // Escolha um pokemon aleatóriamente
    const handleIDRandom2 = async () => {
      ID.value = Math.floor(Math.random() * IDs.value.pokemon_v2_pokemonspecies.length)
      pokemonSelect.value = handleGetPokemonCompletID(ID.value)
      console.log('Pokemon escolhido: ', pokemonSelect.value)
    }
    handleIDRandom2()

    // Busca as informações do pokemon, através do nome dele
    const handleGetPokemonComplet = async (name) => {
      try {
        const data = await getPokemonComplet(name)
        return data
      } catch (error) {
        alert(error.message)
      }
    }

    // Busca as informações do pokemon, através do ID dele
    const handleGetPokemonCompletID = async (id) => {
      id = await handleIDRandom()
      try {
        const data = await getPokemonCompletID(id)
        insertPokemonArray(data.data.pokemon_v2_pokemonspecies[0])
        return data
      } catch (error) {
        alert(error.message)
      }
    }

    // Adiciona o pokemon ao array
    const insertPokemonArray = async (val) => {
      loading.value = true
      const valor = {
        id: val.id,
        generation: val.generation_id,
        title: val.name,
        type: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        type2: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.at(-1).pokemon_v2_type.name,
        height: val.pokemon_v2_pokemons[0].height,
        peso: val.pokemon_v2_pokemons[0].weight,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + val.id + '.png'
      }
      pokemonArray.value.push(valor)
      loading.value = false
    }

    const filterFn = (val, update, abort) => {
      if (val.length < 3) {
        abort()
        return
      }

      update(async () => {
        const response = await handleGetPokemonComplet(val.toLowerCase())
        data.value = response.data.pokemon_v2_pokemonspecies
        search.value = response.data.pokemon_v2_pokemonspecies
      })
    }

    return {
      pokemonArray,
      search,
      model,
      data,
      url,
      png,
      IDs,
      loading,
      insertPokemonArray,
      filterFn,
      handleGetPokemonComplet,
      handleGetIDPokemon,
      handleIDRandom,
      handleIDRandom2,
      handleGetPokemonCompletID
    }
  }
})

/*
  Exemplo teste
  {
    id: '1',
    generation: '1',
    title: 'Pikachu',
    type: 'electric',
    peso: '25.21',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }
*/
</script>
