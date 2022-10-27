<template>
  <div class="">
    <q-select
      outlined
      :model="model"
      :options="data"
      label="Informe o Pokemon"
      color="teal"
      use-input
      hide-selected
      fill-input
      @filter="filterFn"
      options-selected-class="text-deep-orange"
      class="full-width q-pa-xs"
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

<style>

</style>
