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
      <div v-bind:class="[isCorrect(generation, testeGen.generation) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ generation }}
        </div>
        <div>
          GEN
        </div>
        <q-icon v-if="!isCorrect(generation, testeGen.generation)" :class="[statusCondition(generation, testeGen.generation) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
      </div>
    <!-- Primeira caracteristica -->
      <div  v-bind:class="[isCorrect(type1, testeGen.type1) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        {{ type1 }}
      </div>
    <!-- Segunda característica -->
      <div  v-bind:class="[isCorrect(type2, testeGen.type2) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
          {{ type2 }}
      </div>
    <!-- Peso do Pokemon-->
      <div  v-bind:class="[isCorrect(weight, testeGen.weight) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ weight }}
        </div>
        <div>
          KG
        </div>
        <q-icon v-if="!isCorrect(weight, testeGen.weight)" :class="[statusCondition(weight, testeGen.weight) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
      </div>
      <!-- Altura do Pokemon-->
      <div  v-bind:class="[isCorrect(height, testeGen.height) ? 'correctClass' : 'wrongClass'] + ' circle text-center flex flex-center text-whitePokebola column'">
        <div>
          {{ height }}
        </div>
        <div>
          m
        </div>
        <q-icon v-if="!isCorrect(height, testeGen.height)" :class="[statusCondition(height, testeGen.height) ? '':'rotate-180']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="21px"/>
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
  setup (props) {
    const testeGen = {
      id: 1,
      generation: 1,
      title: 'Pikachu',
      type1: 'electric',
      type2: 'electric',
      height: 4,
      weight: 60
    }
    const statusCondition = (inputVerify, resultVerify) => {
      if (inputVerify > resultVerify) {
        return false
      } else {
        return true
      }
    }

    const isCorrect = (inputVerify, resultVerify) => {
      console.log(inputVerify, resultVerify)
      if (inputVerify === resultVerify) {
        return true
      } else {
        return false
      }
    }

    return {
      statusCondition,
      isCorrect,
      testeGen
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
margin-right: -40px;
margin-top: -40px;
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
