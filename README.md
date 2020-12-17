# Vuemik

Basic form builder for Vue.js.

## Getting started
### Installation

Install vuemik using npm or yarn
```bash
$ npm install vuemik

# or use yarn
$ yarn add vuemik
```

### Example
Vue SFCs example
```vue
<template>
  <Vuemik
    :initialValues="{
      select: 1,
      textarea: 'Write stuff here...',
      checkbox: false,
      number: 42,
      text: 'Username',
      password: 's3cr3t',
    }"
    :onSubmit="onSubmit"
    v-slot="{ handleSubmit }"
  >
    <Field name="select" component="select">
      <option value="1">Choice 1</option>
      <option value="2">Choice 2</option>
    </Field>
    <Field name="textarea" component="textarea" />
    <Field name="checkbox" component="input" type="checkbox" />
    <Field name="text" component="input" type="text" />
    <Field name="number" component="input" type="number" />
    <Field name="password" component="input" type="password" />
    <Field name="submit" component="input" type="submit" @click="handleSubmit" />
  </Vuemik>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Vuemik from '../vuemik/Vuemik.vue';
  import Field from '../vuemik/Field.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Vuemik,
      Field,
    },
    methods: {
      onSubmit: (e: Event) => {
        window.console.log(e);
      },
    },
  });
</script>
```

### Available Props
| Prop           | Default  | Description                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| `onSubmit`  | required        | Function to execute when the form is submitted                       |
| `initialValues` | required        | Form fields initial values                                          |
