<template>
  <div class="row q-col-gutter-xs q-my-xs rounded-borders bg-pink ">
    <div class="col-auto">
      <div class="text-center flex flex-center text-whitePokebola">{{ title }}</div>
      <div class="circle bg-red text-center flex flex-center text-whitePokebola">
      <img v-if="img"
      :src="img"
      style="height: 60px; width: 60px"
      />
      </div>
    </div>
    <div class="col-auto">
      <div class="text-center flex flex-center text-whitePokebola">Tipo</div>
      <div v-if="value_string" class="circle bg-red text-center flex flex-center text-whitePokebola">{{ value_string }}</div>
    </div>
    <div class="col-auto">
      <div class="text-center flex flex-center text-whitePokebola">Tipo</div>
      <div v-if="value_string" class="circle bg-red text-center flex flex-center text-whitePokebola">{{ value_string }}</div>
    </div>
    <div v-if="value_number" class="col-auto">
      <div class="text-center flex flex-center text-whitePokebola">Peso</div>
      <div  class="circle bg-red text-center flex flex-center text-whitePokebola">{{ value_number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showChosenCharacter',
  props: {
    title: {
      type: String,
      required: true
    },
    value_string: {
      type: String
    },
    value_number: {
      type: Number
    },
    img: {
      type: String,
      required: true
    }

  }
}
</script>

<style lang="scss" scoped>

.circle{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: $whitePokebola;
}
</style>
