<template>
  <div class="overflow-y-scroll min-h-screen h-screen bg-white dark:bg-dark-secondary relative">
    <header class="absolute top-0 left-0 py-3 w-full">
      <div class="max-w-screen-lg mx-auto flex flex-row justify-between">
        <slot :name="slotNames.logo" />
        <div class="flex flex-row">
          <slot :name="slotNames.header" />
        </div>
      </div>
    </header>

    <slot :name="slotNames.pages" />
  </div>
</template>

<script>
export default {
  name: "LandingLayout",
  data() {
    return {
      slotNames: {
        logo: "logo",
        header: "header",
        pages: "pages",
      },
    };
  },
};
</script>
