<template>
  <router-link
    class="flex items-center gap-x-3 px-4 py-2 text-sm rounded-md w-full transition-all ease-out duration-500 focus:bg-light-primary hover:bg-light-primary text-light-primary dark:hover:bg-dark-modifier-hover dark:hover:text-dark-modifier-hover dark:text-dark-primary"
    :class="{ 'bg-light-primary dark:bg-dark-modifier-active dark:text-dark-modifier-active': isActive }"
    :to="to">
    <v-icon :name="icon" class="w-4 h-4 fill-current" />
    <p>{{ name }}</p>
  </router-link>
</template>

<script>
export default {
  name: "UiSidebarItem",

  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },

  computed: {
    isActive() {
      return this.to === this.$route.path;
    },
  },
};
</script>
