<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-top: 0;
}
</style>
