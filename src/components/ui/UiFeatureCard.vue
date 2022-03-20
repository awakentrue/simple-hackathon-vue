<template>
  <div class="relative flex flex-col items-center p-6 bg-white dark:bg-dark-secondary rounded-md shadow-md">
    <v-icon :name="icon" class="fill-current text-sky-blue w-16 h-16 p-1 -mt-1 mb-2" />
    <h4 class="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-600 dark:text-gray-400">{{ header }}</h4>
    <p class="text-gray-500 text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "UiFeatureCard",
  props: {
    icon: String,
    header: String,
    description: String,
  },
};
</script>
