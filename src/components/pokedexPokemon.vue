<template>
    <div class="pokedex flex flex-center relative-position">
      <q-img
        src="../../public/imgs/pokedex.png"
        alt="pokedex"
        class="pokedex__img"
      />
      <!-- Imagem do Pokemon-->
      <img
      class="pokedex__pokemon absolute"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />
    </div>
</template>

<script>
export default {
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
}

.pokedex__pokemon{
  left: 27%;
  bottom: 48%;
  height: 25%;
}
</style>
