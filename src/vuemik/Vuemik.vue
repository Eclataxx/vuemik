<template>
  <div class="vuemik-form">
    <slot :handleSubmit="handleSubmit"></slot>
  </div>
</template>

<script>
export default {
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
  provide() {
    return {
      vuemik: {
        values: this.values,
        change: this.handleChange,
      },
    };
  },
  methods: {
    eventOrValue(e) {
      if (!(e instanceof Event)) {
        throw new Error("Instance of Event expected");
      }

      if (e.target.options) {
        const selectedOption = e.target.options[e.target.selectedIndex];
        return selectedOption._value !== undefined
          ? selectedOption._value
          : selectedOption.value;
      }

      if (e.target.type === "checkbox") {
        return e.target.checked;
      }

      return e.target.value;
    },
    handleChange(e) {
      this.setValues({ [e.target.name]: this.eventOrValue(e) });
    },
    setValues(values) {
      Object.entries(values).forEach(([key, val]) => {
        this.$data.values[key] = val; 
      });
    },
    handleSubmit() {
      this.onSubmit(this.values);
    },
  },
};
</script>
