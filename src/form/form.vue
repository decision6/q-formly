<script>
  import { QBtn } from 'quasar-framework'

  export default {
    name: 'q-formly',
    components: { QBtn },
    props: {
      confirmButton: {
        type: Object
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
      },
      hasButton: {
        type: Boolean,
        default () {
          return true
        }
      }
    },
    computed: {
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
        if (this.isFormValid) {
          this.$emit('submit', this.model)
        }
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
      v-if="hasButton"
      big> {{ confirmButton.label }} </q-btn>
  </form>
</template>

<style lang="css" scoped>
  .app-form {
    border: none;
    padding-left: 0;
    padding-right: 0;
  }
</style>
