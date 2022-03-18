<template>
  <button
    class="rounded-full hover:md:bg-light-primary dark:hover:md:bg-dark-primary w-10 h-10 flex items-center justify-center p-1 cursor-pointer text-sky-blue dark:text-white"
    @click="clickHandler($event)">
    <v-icon :name="icon" class="fill-current" />
  </button>
</template>

<script>
export default {
  name: "UiIconButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", e);
    },
  },
};
</script>
