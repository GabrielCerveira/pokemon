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
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola">{{ value_string }}</div>
    <!-- Segunda característica -->
      <div v-if="value_string" class="circle bg-secondary text-center flex flex-center text-whitePokebola">{{ value_string }}</div>
      <!-- Peso do Pokemon-->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola column">
        <div>
          {{ value_number }}
        </div>
        <div>
          M
        </div>
      </div>
      <!-- Altura do Pokemon-->
      <div  class="circle bg-secondary text-center flex flex-center text-whitePokebola column">
        <div>
          {{ value_number }}
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
    value_string: {
      type: String
    },
    value_number: {
      type: String
    },
    img: {
      type: String
    },
    generation: {
      type: String
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
