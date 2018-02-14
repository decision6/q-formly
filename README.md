# q-formly

A wrapper for vue-formly-quasar theme.

## Requirements

The plugin depends:

+ [Vue Formly](https://github.com/formly-js/vue-formly)
+ [Vue Formly Quasar](https://github.com/decision6/vue-formly-quasar)
+ [Quasar](http://quasar-framework.org/guide/)

## Install

```bash
yarn add q-formly vue-formly vue-formly-quasar
```

On `main.js` on Quasar template:

```js
// code above

import Vue from 'vue'
import Quasar from 'quasar'
import VueFormly from 'vue-formly'
import VueFormlyQuasar from 'vue-formly-quasar'
import QFormly from 'q-formly'

// Install plugins
Vue.use(Quasar)
Vue.use(VueFormly)
Vue.use(VueFormlyQuasar)
Vue.use(QFormly)

// code below
```

## Usage

On template

```html
<q-formly
  :model="model"
  :fields="fields"
  @submit="onSubmit"
  @clear="onClear" />
```

On script tag

```js
export default {
  data: () => ({
    model: {},
    fields: []
  }),
  methods: {
    onSubmit () {},
    onClear () {}
  }
}
```

[See the complete example and others](https://decision6.github.io/q-formly/)

## QFormly component

### Properties

|     Property     |   Type  | Required |                    Description                    |
|:----------------:|:-------:|:--------:|:-------------------------------------------------:|
|       model      |  Object |    yes   |                     Form model                    |
|      fields      |  Array  |    yes   | An array of objects with each field on your form. |
| forceFormDisable | Boolean |    no    |             Force disable save button             |

### Events

|  Event  |              Description              |
|:-------:|:-------------------------------------:|
| @submit |         Submit form when valid        |
| @clear  | Function when clear button is clicked |
