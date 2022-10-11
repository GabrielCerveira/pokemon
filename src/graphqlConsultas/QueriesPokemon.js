import { api } from 'src/boot/axios'

const graphqlQueryCaracter = {
  operationName: 'samplePokeAPIquery',
  query: `
        query samplePokeAPIquery($name: String) {
          pokemon_v2_pokemonspecies(where: {name: {_regex: $name}}) {
            id
            is_legendary
            name
            pokemon_v2_pokemons {
              height
              weight
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
            }
            generation_id
          }
        }
        `,
  variables: {
    name
  }
}

const graphqlQueryID = {
  operationName: 'samplePokeAPIqueryID',
  query: `
        query samplePokeAPIqueryID($id: Int) {
          pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
            id
            is_legendary
            name
            pokemon_v2_pokemons {
              height
              weight
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
            }
            generation_id
          }
        }
        `,
  variables: {
    id
  }
}

const graphqlQueryIdPokemon = {
  operationName: 'simpleQueryID',
  query: `
          query simpleQueryID {
            pokemon_v2_pokemonspecies {
              id
            }
          }
        `
}

export default function queriesPokemon () {
  const endpoint = 'https://beta.pokeapi.co/graphql/v1beta'
  const headers = {
    'content-type': 'application/json'
  }

  const getPokemonComplet = async (name) => {
    graphqlQueryCaracter.variables.name = name
    const { data, error } = await api({
      url: endpoint,
      method: 'post',
      headers,
      data: graphqlQueryCaracter
    })
    if (error) throw error
    return data
  }

  const getPokemonCompletID = async (id) => {
    graphqlQueryID.variables.name = id
    const { data, error } = await api({
      url: endpoint,
      method: 'post',
      headers,
      data: graphqlQueryCaracter
    })
    if (error) throw error
    return data
  }

  const getIDPokemon = async () => {
    const { data, error } = await api({
      url: endpoint,
      method: 'post',
      headers,
      data: graphqlQueryIdPokemon
    })
    if (error) throw error
    return data
  }

  return {
    getPokemonComplet,
    getIDPokemon,
    getPokemonCompletID
  }
}
