<script>
const model = {
  firstName: '',
  lastName: '',
  age: null,
  genre: 'M',
  select: 'go'
}
import { Dialog } from 'quasar-framework'

export default {
  name: 'CompleteExample',
  data () {
    return {
      formDisable: false,
      form: {},
      modelBkp: { ...model },
      model: { ...model },
      fields: [
        {
          key: 'firstName',
          type: 'input',
          required: true,
          templateOptions: {
            field: {
              icon: 'person',
              'error-label': 'The person name is invalid'
            },
            input: {
              'float-label': 'First name',
              type: 'text'
            }
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            field: {
              icon: 'person'
            },
            input: {
              'float-label': 'Last name',
              type: 'text'
            }
          }
        },
        {
          key: 'age',
          type: 'input',
          required: true,
          validators: {
            isValid: 'model[ field.key ] <= 100 && model[ field.key ] >= 1'
          },
          templateOptions: {
            field: {
              icon: 'person',
              helper: 'Age must be beetwen 1 and 100 years old',
              'error-label': 'Age invalid'
            },
            input: {
              'float-label': 'Age',
              type: 'number',
              min: 1,
              max: 120
            }
          }
        },
        {
          key: 'genre',
          type: 'option-group',
          templateOptions: {
            field: {
              icon: 'person'
            },
            type: 'radio',
            inline: true,
            options: [
              {
                value: 'M',
                label: 'Male'
              },
              {
                value: 'F',
                label: 'Female'
              }
            ]
          }
        },
        {
          key: 'select',
          type: 'select',
          templateOptions: {
            field: {
              icon: 'business'
            },
            input: {
              'float-label': 'Works at',
              color: 'secondary',
              inverted: true,
              options: [
                {
                  label: 'Google',
                  value: 'go'
                },
                {
                  label: 'Facebook',
                  value: 'fb'
                }
              ]
            }
          }
        }
      ]
    }
  },
  methods: {
    onSave (model) {
      this.formDisable = true
      Dialog.create({
        title: 'Saved',
        onDismiss: () => {
          this.formDisable = false
          this.reset()
        }
      })
    },
    reset () {
      this.model = { ...this.modelBkp }
    },
    onClear () {
      this.reset()
    }
  }
}
</script>

<template lang="html">
  <div class="complete-example">
    <p class="caption">
      Example
    </p>

    <q-formly
      :forceFormDisable="formDisable"
      :model="model"
      :fields="fields"
      @clear="onClear"
      @submit="onSave" />
  </div>
</template>

<style lang="css">
  .complete-example {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
