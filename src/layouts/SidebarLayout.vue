<template>
  <div class="min-h-screen h-screen flex flex-col">
    <header class="bg-white dark:bg-dark-secondary shadow-sm py-3 flex border-b border-gray:100 dark:border-gray-600">
      <div class="w-12 md:w-60 md:px-4 flex items-center">
        <slot :name="slotsNames.logo" />
      </div>
      <div class="flex-1 pl-3 md:px-4 flex">
        <UiIconButton ref="mobileSidebarButton" :icon="burgerButtonIcon" class="md:hidden" @click="toggleMobileSidebar" />
        <div class="flex-1">
          <slot :name="slotsNames.header" />
        </div>
      </div>
    </header>

    <div class="flex-1 flex flex-row overflow-y-hidden">
      <nav
        class="fixed md:relative md:w-60 h-full bg-white dark:bg-dark-secondary border-r border-gray-100 dark:border-gray-600 overflow-y-auto md:transition-none transition-[width] duration-500 ease-in-out"
        :class="{ 'w-60': mobileMenuIsOpen, 'w-0': !mobileMenuIsOpen }"
        v-click-outside="{
          handler: 'closeMobileSidebar',
          exclude: ['mobileSidebarButton'],
        }"
        v-if="hasSidebarSlot">
        <slot :name="slotsNames.sidebar" />
      </nav>

      <main class="flex-1 bg-light-primary dark:bg-dark-primary overflow-x-hidden overflow-y-auto md:p-4">
        <slot :name="slotsNames.content" />
      </main>
    </div>
  </div>
</template>

<script>
import mobileSidebarMixin from "@/layouts/mixins/mobileSidebarMixin";
import UiIconButton from "@/components/ui/UiIconButton";

export default {
  name: "SidebarLayout",
  components: { UiIconButton },
  mixins: [mobileSidebarMixin],

  data() {
    return {
      slotsNames: {
        sidebar: "sidebar",
        content: "content",
        logo: "logo",
        header: "header",
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
