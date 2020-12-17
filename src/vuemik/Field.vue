<template>
  <component v-bind:is="component"
    :name="name"
    @input="vuemik.change"
    :value="vuemik.values[name]"
    :checked="vuemik.values[name]"
  >
    <slot></slot>
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Field',
  props: {
    component: { type: [Object, String], required: true },
    name: { type: String, required: true },
  },
  inject: ['vuemik'],
  methods: {},
});
</script>
