<script>
  import { QBtn } from 'quasar'
  import { has } from 'lodash'

  export default {
    name: 'q-formly',
    components: { QBtn },
    props: {
      confirmButton: {
        type: Object,
        validator (value) {
          return has(value, 'text')
        }
      },
      model: {
        type: Object,
        default () {
          return { model: {} }
        },
        required: true
      },
      fields: {
        type: Array,
        default () {
          return { fields: [] }
        },
        required: true
      }
    },
    computed: {
      confirmButtonm () {
        return this.actionsButtons[0]
      },
      isFormValid () {
        return this.form.$valid
      }
    },
    data () {
      return {
        form: {}
      }
    },
    methods: {
      submitForm () {
        this.$emit('submit', this.model)
      }
    }
  }
</script>

<template lang="html">
  <form @submit.prevent="submitForm">
    <formly-form
      class="app-form"
      :form="form"
      :model="model"
      :fields="fields"></formly-form>

    <q-btn
      :icon="confirmButton.icon"
      color="primary"
      :disabled="!isFormValid"
      big> {{ confirmButton.text }} </q-btn>
  </form>
</template>

<style lang="css" scoped>
  .app-form {
    border: none;
  }
</style>
