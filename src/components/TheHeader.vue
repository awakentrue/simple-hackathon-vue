<template>
  <div class="flex justify-end md:justify-between items-center">
    <UiSearchInput class="w-60 hidden md:block" v-show="!currentLayoutIsLanding" />
    <div class="flex gap-x-3">
      <TheLayoutSwitcher />
      <TheThemeSwitcher />
    </div>
  </div>
</template>

<script>
import UiSearchInput from "@/components/ui/UiSearchInput";
import TheLayoutSwitcher from "@/components/TheLayoutSwitcher";
import TheThemeSwitcher from "@/components/TheThemeSwitcher";
import { layouts } from "@/store";

export default {
  name: "TheHeader",
  components: { UiSearchInput, TheLayoutSwitcher, TheThemeSwitcher },

  computed: {
    currentLayoutIsLanding() {
      return this.$store.state.layout === layouts.landing;
    },
  },
};
</script>
