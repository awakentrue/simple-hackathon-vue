<template>
  <div class="relative">
    <UiIconButton ref="layoutSwitchButton" icon="th-large" @click="toggleDropDown" />
    <transition name="dropdown">
      <nav
        class="absolute right-0 bg-white dark:bg-dark-secondary z-50 rounded-md flex flex-col p-4 gap-3 border border-gray-100 dark:border-gray-600 overflow-y-auto"
        v-click-outside="{
          handler: 'closeDropDown',
          exclude: ['layoutSwitchButton'],
        }"
        v-if="isOpen">
        <div
          class="flex flex-col gap-1 cursor-pointer"
          :class="{ 'opacity-40': currentLayout !== layouts.centered }"
          @click="switchLayout(layouts.centered)">
          <h1 class="text-light-primary dark:text-dark-primary">Centered layout</h1>
          <section class="flex flex-col w-48 h-48 border-2 border-sky-blue rounded-md p-3 gap-y-1">
            <header class="h-4 w-full bg-sky-blue"></header>
            <div class="flex flex-1 gap-x-1 px-3">
              <nav class="order-first h-8 w-1/4 bg-sky-blue"></nav>
              <main class="h-full w-full bg-sky-blue"></main>
            </div>
          </section>
        </div>

        <div
          class="flex flex-col gap-1 cursor-pointer"
          :class="{ 'opacity-40': currentLayout !== layouts.sidebar }"
          @click="switchLayout(layouts.sidebar)">
          <h1 class="text-light-primary dark:text-dark-primary">Sidebar layout</h1>
          <section class="flex flex-col w-48 h-48 border-2 border-sky-blue rounded-md p-3 gap-y-1">
            <header class="h-4 w-full bg-sky-blue"></header>
            <div class="flex flex-1 gap-x-1">
              <nav class="order-first h-full w-1/4 bg-sky-blue"></nav>
              <main class="h-full w-full bg-sky-blue"></main>
            </div>
          </section>
        </div>

        <div
          class="flex flex-col gap-1 cursor-pointer"
          :class="{ 'opacity-40': currentLayout !== layouts.landing }"
          @click="switchLayout(layouts.landing)">
          <h1 class="text-light-primary dark:text-dark-primary">Landing layout</h1>
          <section class="flex flex-col w-48 h-48 border-2 border-sky-blue rounded-md p-3 gap-y-1">
            <header class="flex items-center justify-center w-full h-full bg-sky-blue">
              <p class="text-white text-xs">Landing page</p>
            </header>
          </section>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import { layouts } from "@/store";
import { mutations } from "@/store/mutationsNames";
import UiIconButton from "@/components/ui/UiIconButton";

export default {
  name: "TheLayoutSwitcher",
  components: { UiIconButton },
  data() {
    return {
      layouts: layouts,
      isOpen: false,
    };
  },

  computed: {
    currentLayout() {
      return this.$store.state.layout;
    },
  },

  methods: {
    switchLayout(layout) {
      this.$store.commit(mutations.SetLayout, layout);
    },

    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },

    closeDropDown() {
      if (this.isOpen === false) return;

      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 500ms;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
