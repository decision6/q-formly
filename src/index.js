import FormComponent from './form'

/**
 * Install plugin for QFormly
 * @param  {Object} Vue vue instance
 */
export default (Vue) => {
  Vue.component('q-formly', FormComponent)
}
