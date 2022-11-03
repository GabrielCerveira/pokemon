<template>
    <div class="pokedex relative-position">
      <!-- Imagem do Pokemon-->
      <img
      class="pokedex__pokemon absolute"
      :src="url"
      />

      <!--Nome do pokemone e id-->
      <div class="pokedex__data text-weight-medium absolute">
        <span class="pokedex__number">
          {{id}}
        </span> -
        <span class="pokedex__name text-capitalize">
          {{name}}
        </span>
      </div>

      <ShowChosenCharacter
        class="pokedex__character absolute"
        :type1="type"
        :type2="type2"
        :height="height"
        :weight="weight"
        :generation="generation"
        />

      <!--Seletor de pokemon-->
      <pokemonSelector class="pokedex__selector absolute" @teste-emit = 'setValueInArray' :disable="isCorrect" />

      <!--Botões da pokedex-->
      <div class="pokedex__buttons absolute row">
        <q-btn
        class="pokedex__button pokedex__button--prev col"
        label="Anterior"
        @click="decreaseIndexArray"
        :ripple=false
        dense
        />
        <q-btn
        class="pokedex__button pokedex__button--next col"
        label="Próximo"
        @click="incrementIndexArray"
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
import ShowChosenCharacter from 'src/components/showChosenCharacter.vue'
import pokemonSelector from './pokemonSelector.vue'
export default {
  components: { pokemonSelector, ShowChosenCharacter },
  name: 'pokedexPokemon',

  setup () {
    const pokemonArray = ref([])
    const url = ref()
    const id = ref()
    const name = ref()
    const type = ref()
    const type2 = ref()
    const height = ref()
    const weight = ref()
    const generation = ref()
    const indexArray = ref(0)
    const isCorrect = ref(false)
    const objLocalStoragePokemon = JSON.parse(localStorage.getItem('pokemon'))

    const incrementIndexArray = () => {
      if (indexArray.value === pokemonArray.value.length - 1) {
        indexArray.value = 0
      } else {
        indexArray.value = indexArray.value + 1
      }
      id.value = pokemonArray.value[indexArray.value].id
      url.value = pokemonArray.value[indexArray.value].image
      name.value = pokemonArray.value[indexArray.value].name
      type.value = pokemonArray.value[indexArray.value].type
      type2.value = pokemonArray.value[indexArray.value].type2
      height.value = pokemonArray.value[indexArray.value].height
      weight.value = pokemonArray.value[indexArray.value].weight
      generation.value = pokemonArray.value[indexArray.value].generation
      console.log(indexArray.value, 'teste', pokemonArray.value.at(indexArray.value).id)
    }

    const decreaseIndexArray = () => {
      if (indexArray.value === 0) {
        indexArray.value = pokemonArray.value.length - 1
      } else {
        indexArray.value = indexArray.value - 1
      }
      id.value = pokemonArray.value[indexArray.value].id
      url.value = pokemonArray.value[indexArray.value].image
      name.value = pokemonArray.value[indexArray.value].name
      type.value = pokemonArray.value[indexArray.value].type
      type2.value = pokemonArray.value[indexArray.value].type2
      height.value = pokemonArray.value[indexArray.value].height
      weight.value = pokemonArray.value[indexArray.value].weight
      generation.value = pokemonArray.value[indexArray.value].generation
      console.log(indexArray.value)
    }

    const setValueInArray = (val) => {
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
      pokemonArray.value.push(valor)
      indexArray.value = pokemonArray.value.length - 1
      id.value = pokemonArray.value[indexArray.value].id
      url.value = pokemonArray.value[indexArray.value].image
      name.value = pokemonArray.value[indexArray.value].name
      type.value = pokemonArray.value[indexArray.value].type
      type2.value = pokemonArray.value[indexArray.value].type2
      height.value = pokemonArray.value[indexArray.value].height
      weight.value = pokemonArray.value[indexArray.value].weight
      generation.value = pokemonArray.value[indexArray.value].generation
      console.log(id.value, objLocalStoragePokemon.id)
      if (id.value === objLocalStoragePokemon.id) {
        isCorrect.value = true
      }
      console.log(isCorrect.value)
    }
    return {
      pokemonArray,
      indexArray,
      id,
      name,
      url,
      type,
      type2,
      height,
      weight,
      generation,
      isCorrect,
      incrementIndexArray,
      decreaseIndexArray,
      setValueInArray
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
  font-size: clamp(8px, 4vw, 20px);
}

.pokedex__name{
  color: $blackPokebola;
}

.pokedex__character{
  width: 89.5%;
  top:64%;
  left: 9.5%;
}
.pokedex__selector{
  width: 72%;
  top:73%;
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
