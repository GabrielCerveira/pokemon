<template>
  <q-page class="flex flex-center">
    <pokedexPokemon @is-correct = 'setCorrect'/>
    <dialogCongratulations v-if="isCorrect===true" :attempts="attempts" @play-again = 'playAgain'/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import pokedexPokemon from 'src/components/pokedexPokemon.vue'
import dialogCongratulations from 'src/components/dialogCongratulations.vue'
import queriesPokemon from 'src/graphqlConsultas/QueriesPokemon'

export default defineComponent({
  name: 'IndexPage',
  components: { pokedexPokemon, dialogCongratulations },

  setup () {
    const { getIDPokemon, getPokemonCompletID } = queriesPokemon()
    const IDs = ref()
    const ID = ref()
    const pokemonSelect = ref([{}])
    const isCorrect = ref(false)
    const attempts = ref()
    // Busca todos os IDs dos pokemons
    const handleGetIDPokemon = async () => {
      try {
        const data = await getIDPokemon()
        IDs.value = await data.data
      } catch (error) {
        alert(error.message)
      }
      handleIDRandom2()
    }

    handleGetIDPokemon()

    // Escolha um pokemon aleatóriamente e seta a varíavel no LocalStorage
    const handleIDRandom2 = async () => {
      ID.value = IDs.value.pokemon_v2_pokemonspecies[Math.floor(Math.random() * IDs.value.pokemon_v2_pokemonspecies.length)]
      pokemonSelect.value = await handleGetPokemonCompletID(ID.value.id)
      const valor = {
        id: pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].id,
        generation: pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].generation_id,
        title: pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].name,
        type1: pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        type2: pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.at(-1).pokemon_v2_type.name,
        height: (pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].height * 0.1).toFixed(2),
        weight: (pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].weight * 0.1).toFixed(2),
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonSelect.value.data.pokemon_v2_pokemonspecies[0].id + '.png'
      }
      localStorage.setItem('pokemon', JSON.stringify(valor))
    }

    // Busca as informações do pokemon, através do ID dele
    const handleGetPokemonCompletID = async (id) => {
      try {
        const data = await getPokemonCompletID(id)
        return data
      } catch (error) {
        alert(error.message)
      }
    }

    const setCorrect = (attempts1) => {
      isCorrect.value = true
      attempts.value = attempts1
      console.log('ext', attempts.value)
      console.log('int', attempts1)
    }

    const playAgain = () => {
      isCorrect.value = false
      handleIDRandom2()
    }

    return {
      isCorrect,
      attempts,
      setCorrect,
      playAgain
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
