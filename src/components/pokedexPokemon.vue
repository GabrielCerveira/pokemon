<template>
    <div class="pokedex relative-position">
      <!-- Imagem do Pokemon-->
      <img
      class="pokedex__pokemon absolute"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />

      <!--Nome do pokemone e id-->
      <div class="pokedex__data text-weight-medium absolute">
        <span class="pokedex__number">
          25
        </span> -
        <span class="pokedex__name text-capitalize">
          pikachu
        </span>
      </div>

      <!--Seletor de pokemon-->
      <pokemonSelector class="pokedex__selector absolute"/>

      <!--Imagem da pokedex-->
      <q-img
        src="../../public/imgs/pokedex.png"
        alt="pokedex"
        class="pokedex__img"
      />
    </div>
</template>

<script>
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

  }
}
</script>

<style lang="scss" scoped>
.pokedex__img{
  width: 45vh;
  z-index: -1;
}

.pokedex__pokemon{
  left: 27%;
  bottom: 48%;
  height: 25%;
}

.pokedex__data {
  color: $grayPokedex;
  top: 54.8%;
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
</style>
