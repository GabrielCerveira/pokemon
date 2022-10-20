<template>
  <div class="row q-my-sm characterInfo flex q-pa-xs" v-if="title">

    <!-- Imagem do Pokemon-->
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

    <!-- Geração -->
    <div class="flex flex-center relative-position col-7 justify-around no-wrap ">
      <div v-bind:class="[isCorrect(generation, objLocalStoragePokemon.generation) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ generation }}
        </div>
        <div>
          GEN
        </div>
        <q-icon v-if="!isCorrect(generation, objLocalStoragePokemon.generation)" :class="[statusCondition(generation, objLocalStoragePokemon.generation) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
      </div>
    <!-- Primeira caracteristica -->
      <div  v-bind:class="[isCorrect(type1, objLocalStoragePokemon.type1) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        {{ type1 }}
      </div>
    <!-- Segunda característica -->
      <div  v-bind:class="[isCorrect(type2, objLocalStoragePokemon.type2) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
          {{ type2 }}
      </div>
    <!-- Peso do Pokemon-->
      <div  v-bind:class="[isCorrect(weight, objLocalStoragePokemon.weight) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ weight }}
        </div>
        <div>
          KG
        </div>
        <q-icon v-if="!isCorrect(weight, objLocalStoragePokemon.weight)" :class="[statusCondition(weight, objLocalStoragePokemon.weight) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
      </div>
      <!-- Altura do Pokemon-->
      <div  v-bind:class="[isCorrect(height, objLocalStoragePokemon.height) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ height }}
        </div>
        <div>
          m
        </div>
        <q-icon v-if="!isCorrect(height, objLocalStoragePokemon.height)" :class="[statusCondition(height, objLocalStoragePokemon.height) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
      </div>
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
      if (inputVerify === resultVerify) {
        return true
      } else {
        return false
      }
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

.correctClass{
  background-color: $positive !important
}

.wrongClass{
  background-color: $negative !important
}

.positionIcon {
margin-right: -45px;
margin-top: -45px;
background-color: red;
border-radius: 50%;
}

.characterName{
  color: $blackPokebola;
  font-size: 14px;
}

.characterInfo{
  background-color: $whitePokebola;
  border-radius: 50px;
}
</style>
