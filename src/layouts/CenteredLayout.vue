<template>
  <div class="min-h-screen h-screen flex flex-col bg-light-primary dark:bg-dark-primary">
    <header class="bg-white dark:bg-dark-secondary md:border-b-0 border-b border-gray-100 dark:border-gray-600">
      <div class="max-w-screen-lg mx-auto py-3 flex">
        <div class="w-12 md:w-1/5 flex items-center">
          <slot :name="slotsNames.logo" />
        </div>
        <div class="pl-3 flex-1 flex">
          <UiIconButton ref="mobileSidebarButton" :icon="burgerButtonIcon" class="md:hidden" @click="toggleMobileSidebar" />
          <div class="flex-1">
            <slot :name="slotsNames.header" />
          </div>
        </div>
      </div>
    </header>

    <div class="flex-1 flex flex-row max-w-screen-lg w-full mx-auto gap-x-3 md:py-3 overflow-y-hidden">
      <nav
        class="fixed h-full md:bg-transparent dark:md:bg-transparent md:border-0 md:relative md:w-1/5 order-first overflow-y-auto md:transition-none transition-[width] duration-500 ease-in-out"
        :class="{
          'bg-white dark:bg-dark-secondary w-60 border-r border-gray-100 dark:border-gray-600': mobileMenuIsOpen,
          'w-0': !mobileMenuIsOpen,
        }"
        v-click-outside="clickOutside"
        v-if="hasSidebarSlot">
        <slot :name="slotsNames.sidebar" />
      </nav>

      <main class="flex-1 overflow-y-auto">
        <slot :name="slotsNames.content" />
      </main>
    </div>
  </div>
</template>

<script>
import UiIconButton from "@/components/ui/UiIconButton";
import mobileSidebarMixin from "@/layouts/mixins/mobileSidebarMixin";

export default {
  name: "CenteredLayout",
  components: { UiIconButton },
  mixins: [mobileSidebarMixin],

  data() {
    return {
      slotsNames: {
        logo: "logo",
        header: "header",
        sidebar: "sidebar",
        content: "content",
      },
      clickOutside: {
        handler: "closeMobileSidebar",
        exclude: ["mobileSidebarButton"],
      },
    };
  },

  computed: {
    hasSidebarSlot() {
      return !!this.$slots[this.slotsNames.sidebar];
    },
  },
};
</script>
