<template>
  <label :for="inputId" class="flex items-center cursor-pointer">
    <div class="relative">
      <input type="checkbox" :id="inputId" class="sr-only" v-model="isToggled" />
      <div class="block bg-light-primary dark:bg-dark-primary w-14 h-8 rounded-full"></div>
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition duration-300 ease-out"></div>
    </div>
    <div v-if="label" class="ml-3 text-light-primary dark:text-dark-primary">
      {{ label }}
    </div>
  </label>
</template>

<script>
export default {
  name: "UiToggleButton",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: String,
  },

  data() {
    return {
      isToggled: !!this.value,
      inputId: this._uid,
    };
  },

  watch: {
    isToggled(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  @apply bg-sky-blue;
}
</style>
