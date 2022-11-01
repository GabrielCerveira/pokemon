<template>
    <div class="pokedex relative-position">
      <!-- Imagem do Pokemon-->
      <img
      v-if="pokemonarray"
      class="pokedex__pokemon absolute"
      :src="pokemonArray.at(indexArray).image"
      />

      <!--Nome do pokemone e id-->
      <div class="pokedex__data text-weight-medium absolute" v-if="pokemonarray">
        <span class="pokedex__number">
          {{pokemonArray.at(indexArray).id}}
        </span> -
        <span class="pokedex__name text-capitalize">
          {{pokemonArray.at(indexArray).name}}
        </span>
      </div>

      <!--Seletor de pokemon-->
      <pokemonSelector class="pokedex__selector absolute" @teste-emit = 'set'/>

      <!--Botões da pokedex-->
      <div class="pokedex__buttons absolute row ">
        <q-btn
        class="pokedex__button pokedex__button--prev col"
        label="Anterior"
        @click="incrementIndexArray"

        :ripple=false
        dense
        />
        <q-btn
        class="pokedex__button pokedex__button--next col"
        label="Próximo"
        @click="decreaseIndexArray"
        :disabled="indexArray === -1"
        :ripple=false
        dense
        />

      </div>

      <!--Imagem da pokedex-->
      <q-img
        src="../../public/imgs/pokedex.png"
        alt="pokedex"
        class="pokedex__img"
      />
    </div>
</template>

<script>
import { ref } from 'vue'
import pokemonSelector from './pokemonSelector.vue'
export default {
  components: { pokemonSelector },
  name: 'pokedexPokemon',
  props: {
    title: {
      type: String
    },
    type1: {
      type: String
    },
    type2: {
      type: String
    },
    height: {
      type: String
    },
    weight: {
      type: String
    },
    img: {
      type: String
    },
    generation: {
      type: Number
    }

  },

  setup () {
    const pokemonArray = ref()
    const indexArray = ref()

    const incrementIndexArray = () => {
      indexArray.value = indexArray.value + 1
    }

    const decreaseIndexArray = () => {
      indexArray.value = indexArray.value - 1
    }

    const set = (val) => {
      const valor = {
        id: val.id,
        generation: val.generation_id,
        name: val.name,
        type: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        type2: val.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.at(-1).pokemon_v2_type.name,
        height: (val.pokemon_v2_pokemons[0].height * 0.1).toFixed(1).replace('.', ','),
        weight: (val.pokemon_v2_pokemons[0].weight * 0.1).toFixed(1).replace('.', ','),
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + val.id + '.png'
      }
      indexArray.value = -1
      pokemonArray.value.push(valor)

      console.log(pokemonArray.value)
    }
    return {
      pokemonArray,
      indexArray,
      incrementIndexArray,
      decreaseIndexArray,
      set
    }
  }
}
</script>

<style lang="scss" scoped>
.pokedex__img{
  width: 45vh;
  z-index: -1;
  min-width: 300px;
}

.pokedex__pokemon{
  left: 27%;
  bottom: 48%;
  height: 25%;
}

.pokedex__data {
  color: $grayPokedex;
  top: 53.8%;
  right: 25%;
  font-size: clamp(8px, 5vw, 25px);
}

.pokedex__name{
  color: $blackPokebola;
}

.pokedex__selector{
  width: 72%;
  top:65%;
  left: 9.5%;
}

.pokedex__buttons{
  bottom: 7%;
  left: 50%;
  width: 65%;
  transform: translate(-57%,0);
  gap: 10px;
}

.pokedex__button{
  width: 50%;
  height: 35px;
  padding: 2%;
  border: 2px solid #111;
  border-radius: 5px;
  font-size: clamp(8px, 1vw, 0.8rem);
  font-weight: 600;
  color: white;
  background-color: #444;
  box-shadow: -2px 3px 0 #222, -3px 5px 0 #000;
}
.pokedex__button:active{
  box-shadow: inset -4px 4px 0 #222,

}
</style>
