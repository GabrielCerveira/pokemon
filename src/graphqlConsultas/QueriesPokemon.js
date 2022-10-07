import { api } from 'src/boot/axios'

const graphqlQuery = {
  operationName: 'samplePokeAPIquery',
  query: `
        query samplePokeAPIquery($name: String) {
          poke: pokemon_v2_pokemonspecies(where: {name: {_regex: $name}}) {
            name
            id
            is_legendary
            generation_id
          }
        }`,
  variables: {
    name
  }
}
/*
pokemon_v2_pokemonsprites_aggregate(where: {pokemon_v2_pokemon: {name: {_nregex: $name}}}, limit: 1) {
            nodes {
              sprites
              id
            }
          }
*/
export default function queriesPokemon () {
  const endpoint = 'https://beta.pokeapi.co/graphql/v1beta'
  const headers = {
    'content-type': 'application/json'
  }

  const getPokemonComplet = async (name) => {
    graphqlQuery.variables.name = name
    const { data, error } = await api({
      url: endpoint,
      method: 'post',
      headers,
      data: graphqlQuery
    })
    if (error) throw error
    return data
  }

  return {
    getPokemonComplet
  }
}
