<template>
  <div class="row q-my-sm characterInfo flex q-pa-xs">

    <!-- Imagem do Pokemon-->
    <div v-if="img" class="col-2 flex flex-center">
      <div class="circle bg-secondary text-center flex flex-center text-whitePokebola">
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
    <div class="flex flex-center col-7 justify-around no-wrap ">
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola column">
        <div>
          {{ generation }}
        </div>
        <div>
          GEN
        </div>
      </div>
    <!-- Primeira caracteristica -->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola">{{ type1 }}</div>
    <!-- Segunda característica -->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola">{{ type2 }}</div>
    <!-- Peso do Pokemon-->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola column">
        <div>
          {{ weight }}
        </div>
        <div>
          M
        </div>
      </div>
      <!-- Altura do Pokemon-->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola column">
        <div>
          {{ height }}
        </div>
        <div>
          KG
        </div>
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

.characterName{
  color: $blackPokebola;
  font-size: 14px;
}

.characterInfo{
  background-color: $whitePokebola;
  border-radius: 50px;
}
</style>
