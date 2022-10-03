<template>
  <q-page class="flex flex-center">
    <div class="column flex flex-center col-6 bg-green">
      <div class="q-pa-md">
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
            style="width: 450px; padding-bottom: 32px"
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
      </div>
      <ShowChosenCharacter
      v-for="teste in teste"
      :key="teste.id"
      :img="teste.image"
      :title="teste.title"
      :value_string="teste.type"
      :value_number="teste.value"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ShowChosenCharacter from 'src/components/showChosenCharacter.vue'

const stringOptions = [
  'Pikachu', 'Charizard', 'Twitter', 'Apple', 'Oracle'
]
export default defineComponent({
  name: 'IndexPage',
  components: { ShowChosenCharacter },

  setup () {
    const options = ref(stringOptions)

    const teste = ref([
      {
        id: '1',
        title: 'Pikachu',
        type: 'electric',
        value: '27.21',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      {
        id: '1',
        title: 'Charizard',
        type: 'Fogo',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
      }
    ])
    console.log(teste.value[0].title)
    return {
      teste,
      model: ref(null),
      options,

      filterFn (val, update, abort) {
        if (val.length < 2) {
          abort()
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
})
</script>
