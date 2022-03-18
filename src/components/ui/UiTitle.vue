<template>
  <h1 class="text-2xl text-gray-800 dark:text-white font-semibold leading-none tracking-tighter">
    <slot>{{ text }}</slot>
  </h1>
</template>

<script>
export default {
  name: "UiTitle",
  props: {
    text: String,
  },
};
</script>
