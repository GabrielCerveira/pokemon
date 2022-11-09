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
          <span v-if="isCorrect(generation, objLocalStoragePokemon.generation)" class="bg-green absolute positionIcon" style="min-height:14px; min-width: 14px;"></span>
      </div>
    <!-- Primeira caracteristica -->
      <div class="pokemonStatus__info q-pa-xs">
        <span  class="text-center flex flex-center">
          <img
            :class="type1"
            :src="'../../public/imgs/typeIcons/'+type1+'.svg'"
            style="height: 65%; width: 65%"
          />
          <span :class="[isCorrect(type1, objLocalStoragePokemon.type1) ? 'bg-green':'bg-red']+' absolute positionIcon'" style="min-height:14px; min-width: 14px;"></span>
        </span>
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          {{type1}}
        </q-tooltip>
      </div>
    <!-- Segunda característica -->
      <div class="pokemonStatus__info q-pa-xs">
        <span  class="text-center flex flex-center">
          <img
            :class="type2"
            :src="'../../public/imgs/typeIcons/'+type2+'.svg'"
            style="height: 65%; width: 65%"
          />
          <span :class="[isCorrect(type2, objLocalStoragePokemon.type2) ? 'bg-green':'bg-red']+' absolute positionIcon'" style="min-height:14px; min-width: 14px;"></span>
        </span>
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          {{type2}}
        </q-tooltip>
      </div>
    <!-- Peso do Pokemon-->
      <div  class="pokemonStatus__info text-center flex flex-center column">
        <span>
          {{weight}}
        </span>
        <span>
          KG
        </span>
        <q-icon v-if="!isCorrect(weight, objLocalStoragePokemon.weight)" :class="[statusCondition(weight, objLocalStoragePokemon.weight) ? 'rotate-180':'']+' absolute positionIcon'" name="mdi-arrow-up-circle" size="15px"/>
        <span v-if="isCorrect(weight, objLocalStoragePokemon.weight)" class="bg-green absolute positionIcon" style="min-height:14px; min-width: 14px;"></span>
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
        <span v-if="isCorrect(height, objLocalStoragePokemon.height)" class="bg-green absolute positionIcon" style="min-height:14px; min-width: 14px;"></span>
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

.bug {
    background: #92BC2C;
    box-shadow: 0 0 5px #92BC2C;
    padding: 3px;
    border-radius: 50%;
}

.dark {
    background: #595761;
    box-shadow: 0 0 5px #595761;
    padding: 3px;
    border-radius: 50%;
}

.dragon {
    background: #0C69C8;
    box-shadow: 0 0 5px #0C69C8;
    padding: 3px;
    border-radius: 50%;
}

.electric {
    background: #F2D94E;
    box-shadow: 0 0 5px #F2D94E;
    padding: 3px;
    border-radius: 50%;
}

.fire {
    background: #FBA54C;
    box-shadow: 0 0 5px #FBA54C;
    padding: 3px;
    border-radius: 50%;
}

.fairy {
    background: #EE90E6;
    box-shadow: 0 0 5px #EE90E6;
    padding: 3px;
    border-radius: 50%;
}

.fighting {
    background: #D3425F;
    box-shadow: 0 0 5px #D3425F;
    padding: 3px;
    border-radius: 50%;
}

.flying {
    background: #A1BBEC;
    box-shadow: 0 0 5px #A1BBEC;
    padding: 3px;
    border-radius: 50%;
}

.ghost {
    background: #5F6DBC;
    box-shadow: 0 0 5px #5F6DBC;
    padding: 3px;
    border-radius: 50%;
}

.grass {
    background: #5FBD58;
    box-shadow: 0 0 5px #5FBD58;
    padding: 3px;
    border-radius: 50%;
}

.ground {
    background: #DA7C4D;
    box-shadow: 0 0 5px #DA7C4D;
    padding: 3px;
    border-radius: 50%;
}

.ice {
    background: #75D0C1;
    box-shadow: 0 0 5px #75D0C1;
    padding: 3px;
    border-radius: 50%;
}

.normal {
    background: #A0A29F;
    box-shadow: 0 0 5px #A0A29F;
    padding: 3px;
    border-radius: 50%;
}

.poison {
    background: #B763CF;
    box-shadow: 0 0 5px #B763CF;
    padding: 3px;
    border-radius: 50%;
}

.psychic {
    background: #FA8581;
    box-shadow: 0 0 5px #FA8581;
    padding: 3px;
    border-radius: 50%;
}

.rock {
    background: #C9BB8A;
    box-shadow: 0 0 5px #C9BB8A;
    padding: 3px;
    border-radius: 50%;
}

.steel {
    background: #5695A3;
    box-shadow: 0 0 5px #5695A3;
    padding: 3px;
    border-radius: 50%;
}

.water {
    background: #539DDF;
    box-shadow: 0 0 5px #539DDF;
    padding: 3px;
    border-radius: 50%;
}

</style>
