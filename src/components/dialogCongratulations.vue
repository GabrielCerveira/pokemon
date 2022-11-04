<template>
 <q-dialog v-model="card">
      <q-card class="dialog" style="width: 600px">

        <q-card-section class="column q-pa-xl">
          <span class="text-h3 text-center col-12 q-my-md">
            Parabéns, você acertou o pokemon!
          </span>
          <span class="text-h5 col-12 q-my-md">
            Você precisou de {{attempts}} tentativas para acertar o pokemon.
          </span>
        </q-card-section>

        <q-card-section class="q-pt-none">

        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Voltar" />
          <q-btn flat color="primary" label="Jogar novamente" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'dialogCongratulations',
  props: {
    attempts: {
      type: String
    }
  },
  setup () {
    return {
      card: true
    }
  }
}
</script>

<style>

</style>
