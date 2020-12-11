<template>
  <div class="vuemik-form">
    <slot :handleSubmit="handleSubmit"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Vuemik',
  props: {
    onSubmit: { type: Function, required: true },
    initialValues: { type: Object, required: true },
  },
  data() {
    return {
      values: JSON.parse(JSON.stringify(this.initialValues)),
    };
  },
  provide(): {} {
    return {
      vuemik: {
        values: this.values,
        change: this.handleChange,
      },
    };
  },
  methods: {
    isSelectElement(
      element: HTMLSelectElement | HTMLInputElement | EventTarget,
    ): element is HTMLSelectElement {
      return (element as HTMLSelectElement).options !== undefined;
    },
    isInputElement(
      element: HTMLSelectElement | HTMLInputElement | EventTarget,
    ): element is HTMLInputElement {
      return (element as HTMLInputElement).type !== undefined;
    },
    eventOrValue(e: { target: Element }): string | boolean {
      if (!(e instanceof Event)) {
        throw new Error('Instance of Event expected');
      }

      if (this.isSelectElement(e.target)) {
        const selectedOption = e.target.options[e.target.selectedIndex];
        return selectedOption.value;
      }

      if (this.isInputElement(e.target)) {
        return e.target.checked;
      }

      return 'e.target.value';
    },
    handleChange(e: { target: HTMLInputElement }): void {
      this.setValues({ [e.target.name]: this.eventOrValue(e) });
    },
    setValues(values: {}): void {
      Object.entries(values).forEach(([key, val]) => {
        this.$data.values[key] = val;
      });
    },
    handleSubmit(): void {
      this.onSubmit(this.values);
    },
  },
});
</script>
