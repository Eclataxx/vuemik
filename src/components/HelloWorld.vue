<template>
  <div class="hello">
    <Vuemik :initialValues="{test:1, pwd:'password', check: true, textrar: 'hello',txt: 'toto', number: 59}" :onSubmit="onSubmit" v-slot="{handleSubmit}">
      <Field name="test" class="formfield" component="select">
        <option value="1">ceci n'est pas un choix</option>
        <option value="2">ceci non plus</option>
      </Field>

      <Field name="check" component="input" type="checkbox" />

      <Field name="textrar" id="123" component="textarea" />

      <Field name="txt" component="input" type="text" />

      <Field name="number" component="input" type="number" />

      <Field name="pwd" component="input" type="password"/>

      <button @click="handleSubmit">submit</button>
    </Vuemik>
  </div>
</template>

<script>
import Vuemik from "../vuemik/Vuemik.vue";
import Field from "../vuemik/Field.vue";

export default {
  name: "HelloWorld",
  components: {
    Vuemik,
    Field
  },
  methods: {
    onSubmit: (e) => {window.console.log(e)}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
