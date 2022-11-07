<template>
  <div class="row flex pokemonInfo q-gutter-xs">

    <!-- Imagem do Pokemon
    <div v-if="img" class="col-2 flex flex-center">
      <div class="circle bg-white text-center flex flex-center text-whitePokebola">
      <img
      class="absolute"
      :src="img"
      style="height: 90px; width: 90px"
      />
      </div>
    </div>

    <div class="col-3 text-left q-pl-xs flex items-center text-caption text-bold characterName"
      >{{ title }}
    </div>
    -->
    <!-- Geração   v-bind:class="[isCorrect(generation, objLocalStoragePokemon.generation) ? 'correctClass' : 'wrongClass']-->
      <div  class="pokemonStatus__info text-center flex flex-center column">
        <span>
          {{generation}}
        </span>
        <span>
          GEN
        </span>

          <q-icon v-if="!isCorrect(generation, objLocalStoragePokemon.generation)" :class="[statusCondition(generation, objLocalStoragePokemon.generation) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="15px"/>

      </div>
    <!-- Primeira caracteristica -->
      <span  class="pokemonStatus__info text-center flex flex-center ">
        {{type1}}
      </span>
    <!-- Segunda característica -->
      <span  class="pokemonStatus__info text-center flex flex-center ">
        {{type2}}
      </span>
    <!-- Peso do Pokemon-->
      <div  class="pokemonStatus__info text-center flex flex-center column">
        <span>
          {{weight}}
        </span>
        <span>
          KG
        </span>
        <q-icon v-if="!isCorrect(weight, objLocalStoragePokemon.weight)" :class="[statusCondition(weight, objLocalStoragePokemon.weight) ? 'rotate-180':'']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="15px"/>
      </div>
      <!-- Altura do Pokemon-->
      <div  class="pokemonStatus__info text-center flex flex-center column">
        <span>
          {{height}}
        </span>
        <span>
          m
        </span>

        <q-icon v-if="!isCorrect(height, objLocalStoragePokemon.height)" :class="[statusCondition(height, objLocalStoragePokemon.height) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="15px"/>

      </div>
  </div>
</template>

<script>

export default {
  name: 'showChosenCharacter',
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
    // Obtem os dados do local storagem e converte em objeto
    const objLocalStoragePokemon = JSON.parse(localStorage.getItem('pokemon'))

    // Verifica o se os atributos dos pokemons
    const statusCondition = (inputVerify, resultVerify) => {
      if (inputVerify > resultVerify) {
        return false
      } else {
        return true
      }
    }

    // Verifica se o atributo esta correto
    const isCorrect = (inputVerify, resultVerify) => {
      if (typeof inputVerify !== 'undefined') {
        if (inputVerify === resultVerify) {
          return true
        } else {
          return false
        }
      }
      return true
    }

    return {
      statusCondition,
      isCorrect,
      objLocalStoragePokemon
    }
  }
}
</script>

<style lang="scss" scoped>

.circle{
  height: 55px;
  width: 55px;
  border-radius: 50%;
  color: $whitePokebola;
}

.pokemonStatus__info{
  width: 15%;
  height: 12%;
  font-size: clamp(8px, .7vw, 0.8rem);
  font-weight: 600;
  color: black;
  background-color: #E3E3E3;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: -2px 3px 0 #888, -3px 5px 0 #333;
}

.correctClass{
  background-color: $positive !important
}

.wrongClass{
  background-color: $negative !important
}

.positionIcon {
margin-right: -46px;
margin-top: 17px;
background-color: red;
border-radius: 50%;
color: #E3E3E3;

}

.characterName{
  color: $blackPokebola;
  font-size: 14px;
}

</style>
