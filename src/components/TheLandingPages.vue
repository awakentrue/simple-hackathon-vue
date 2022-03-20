<template>
  <fragment>
    <section class="h-full py-8 max-w-screen-lg mx-auto flex flex-col items-center justify-center">
      <transition name="fade" appear>
        <h1 class="text-7xl text-gray-800 dark:text-white text-center font-semibold leading-none tracking-tighter mb-4">simple-hackathon-vue</h1>
      </transition>
      <transition name="fade" appear>
        <h2 class="text-2xl text-gray-600 dark:text-gray-400 opacity-75 font-normal leading-tight mb-8">Quick start project for hackathons</h2>
      </transition>
      <transition name="fade" appear>
        <button class="bg-sky-blue dark:bg-dark-primary py-3 px-7 rounded-md text-white flex items-center gap-3"
                @click="navigateToGithub">
          <v-icon name="brands/github" class="fill-current" />
          Github
        </button>
      </transition>
    </section>

    <div class="hidden md:block absolute left-0 right-0 m-auto p-px transform -translate-y-1/2">
      <transition name="fade" appear>
        <img
          v-if="currentThemeIsDark"
          alt="layout"
          src="@/assets/centered-layout-dark.png"
          class="object-fill max-w-screen-lg mx-auto rounded-md shadow-sm mt-16 shadow-airbnb p-3 bg-dark-primary border border-gray-700" />
        <img
          v-else
          alt="layout"
          src="@/assets/centered-layout-light.png"
          class="object-fill max-w-screen-lg mx-auto rounded-md shadow-sm mt-16 shadow-airbnb p-3 bg-light-primary border border-gray-200" />
      </transition>
    </div>

    <section class="h-full bg-light-primary dark:bg-dark-primary">
      <div class="h-full max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <h1 class="text-7xl text-gray-800 dark:text-white font-semibold leading-none tracking-tighter mb-4">features</h1>
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none mt-8">
          <UiFeatureCard icon="th-large" header="Layouts" description="3 responsive layouts" />
          <UiFeatureCard icon="tailwind" header="Tailwind" description="Design based on Tailwind" />
          <UiFeatureCard icon="moon" header="Themes" description="Black & white themes" />
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import { themes } from "@/store";
import UiFeatureCard from "@/components/ui/UiFeatureCard";

export default {
  name: "TheLandingPages",
  components: { UiFeatureCard },
  computed: {
    currentThemeIsDark() {
      return this.$store.state.theme === themes.dark;
    },
  },
  methods: {
    navigateToGithub() {
      window.location.href = "https://github.com/awakentrue/simple-hackathon-vue";
    }
  }
};
</script>
