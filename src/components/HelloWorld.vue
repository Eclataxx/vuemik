<template>
  <div class="container">
    <h1>Vuemik example</h1>
    <Vuemik id="vuemik"
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
      <div>
        <Field name="checkbox" component="input" type="checkbox" />
        <label for="checkbox">Checkbox</label>
      </div>
      <Field name="number" component="input" type="number" />
      <Field name="text" component="input" type="text" />
      <Field name="password" component="input" type="password" />
      <Field name="submit" component="input" type="submit" @click="handleSubmit" />
    </Vuemik>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vuemik from '../vuemik/Vuemik.vue';
import Field from '../vuemik/Field.vue';

export default defineComponent({
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px;
  margin: auto;
}

#vuemik {
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: .1rem;
  text-align: left;
  box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
}

#vuemik > * {
  margin: .5rem 0 .5rem 0;
  padding: .25rem;
}

input, textarea, select {
  border: 1px solid lightgrey;
  border-radius: .1rem;
  padding: .5rem;
}

input[type="submit"] {
  background-color: #42b883;
  border: 0px;
  color: white;
  font-size: 16px;
  padding-top: .75rem !important;
  padding-bottom: .75rem !important;
  cursor: pointer;
}

textarea {
  resize: vertical;
}
</style>
