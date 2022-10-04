<template>
  <q-page class="flex flex-center">
    <div class="column flex flex-center">
      <div class="q-pa-md">
        <div class="q-gutter-md">

          <q-select
            outlined
            rounded
            v-model="model"
            :options="teste"
            label="Standard"
            color="teal"
            clearable
            options-selected-class="text-deep-orange"
            style="width: 480px;"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps"  @blur="setmodel(teste.indexOf(scope.opt.title))">
                <q-item-section avatar>
                  <div  class="q-ml-md flex flex-center">
                    <div class="text-center flex flex-center text-whitePokebola">
                      <img
                      class="absolute"
                      :src="scope.opt.image"
                      style="height: 60px; width: 60px"
                      />
                    </div>
                  </div>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ scope.opt.title }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <!--
        <div class="q-gutter-md row ">
          <q-select
            outlined
            rounded
            v-model="model"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        -->
      </div>
      <q-scroll-area
      style="height: 400px; width: 100%;"
      >
      <div class="column reverse">
        <ShowChosenCharacter
        v-for="teste in teste"
        :key="teste.id"
        :img="teste.image"
        :title="teste.title"
        :value_string="teste.type"
        :value_number="teste.peso"
        :generation="teste.generation"
        />
      </div>
      <div v-if="model">
          <ShowChosenCharacter
          :img="model.image"
          :title="model.title"
          :value_string="model.type"
          :value_number="model.peso"
          :generation="model.generation"
          />
      </div>
      </q-scroll-area>

    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ShowChosenCharacter from 'src/components/showChosenCharacter.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ShowChosenCharacter },

  setup () {
    const model = ref()
    // const position = ref(0)
    const teste = ref([
      {
        id: '1',
        generation: '1',
        title: 'Pikachu',
        type: 'electric',
        peso: '25.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      {
        id: '2',
        generation: '1',
        title: 'Charizad',
        type: 'Fogo',
        peso: '27.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
      },
      {
        id: '3',
        generation: '1',
        title: 'Ditto',
        type: 'normal',
        peso: '18.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
      },
      {
        id: '5',
        generation: '1',
        title: 'Bulbasaur',
        type: 'grass',
        peso: '31.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        id: '6',
        generation: '1',
        title: 'Ninetales',
        type: 'fogo',
        peso: '90.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png'
      }
    ])
    console.log(teste.value[0].title)
    return {
      teste,
      model,
      setmodel (position) {
        model.value.unshift(teste.value[position])

        console.log('position: ' + position)
        console.log(model.value[position].title)
        console.log('teste: ' + teste.value[0])
        console.log('model: ' + model.value)
      }
    }
  }
})
</script>
