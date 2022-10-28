<template>
  <div class="component">
    <q-select
      borderless
      bg-color="white"
      :model="model"
      :options="data"
      placeholder="Pokemon"
      color="teal"
      use-input
      hide-bottom-space="false"
      hide-selected
      fill-input
      dense
      hide-dropdown-icon
      @filter="filterFn"
      options-selected-class="text-deep-orange"
      input-class="component__input q-pa-xs"
      class="component__selector full-width"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" @blur="insertPokemonArray(scope.opt)">
          <q-item-section avatar>
            <div  class="q-ml-md flex flex-center">
              <div class="text-center flex flex-center text-whitePokebola">
                <img
                class="absolute"
                :src=url+scope.opt.id+png
                style="height: 60px; width: 60px"
                />
              </div>
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  name: 'pokemonSelector'
}
</script>

<style lang="scss" scoped>
.component__selector{
  outline: none;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: -2px 3px 0 #888, -3px 5px 0 #333;
}

.component__input{
  font-weight: 600;
  color: $graySelector;
  font-size: clamp(8px, 5vw, 1rem);

}
</style>
