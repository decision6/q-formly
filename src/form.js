import { QBtn } from 'quasar'

const FormComponent = (h, submit, children) => {
  return h('form', {
    on: {
      submit
    }
  }, children)
}

const FormlyComponent = (h, context) => {
  return h('formly-form', {
    props: {
      form: context.internalForm,
      model: context.model,
      fields: context.fields
    },
    style: {
      border: 'none',
      margin: 0,
      padding: 0
    }
  })
}

const Buttons = (h, context) => {
  const children = [
    h(QBtn, {
      style: {
        marginRight: '5px'
      },
      props: {
        color: 'primary',
        disable: !context.isFormValid
      },
      on: {
        click: context.onSave
      }
    }, 'Save'),
    h(QBtn, {
      props: {
        color: 'faded',
        outline: true
      },
      on: {
        click: context.onClear
      }
    }, 'Clear')
  ]

  return children
}

export default {
  name: 'q-formly',
  components: { QBtn },
  props: {
    forceFormDisable: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Object,
      default: () => ({}),
      required: true
    },
    fields: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data: () => ({
    internalForm: {}
  }),
  watch: {
    internalForm: {
      handler () {
        this.updateForm(this.internalForm)
      },
      deep: true
    }
  },
  computed: {
    isFormValid () {
      return this.internalForm.$valid
    },
    isBtnSaveDisable () {
      return this.isFormValid || this.forceBtnSaveDisable
    }
  },
  methods: {
    onSubmit (event) {
      if (this.isFormValid) {
        this.$emit('submit', this.model)
        event.preventDefault()
        event.stopPropagation()
      }
    },
    onSave () {},
    onClear () {
      this.$emit('clear')
      event.preventDefault()
    },
    updateForm (value) {
      this.$emit('update:form', Object.assign({}, value))
    }
  },
  render (h) {
    return FormComponent(h, this.onSubmit, [
      FormlyComponent(h, this),
      h('br'),
      Buttons(h, this)
    ])
  }
}
