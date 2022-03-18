import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "@/store/mutationsNames";
import { actions } from "@/store/actionsNames";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "",
    layout: "",
  },
  mutations: {
    [mutations.SetTheme](state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    },
    [mutations.SetLayout](state, layout) {
      state.layout = layout;
      localStorage.layout = layout;
    },
  },
  actions: {
    [actions.InitTheme]({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = cachedTheme ? cachedTheme : userPrefersDark ? themes.dark : themes.light;

      commit(mutations.SetTheme, theme);
    },
    [actions.InitLayout]({ commit }) {
      const cachedLayout = localStorage.layout ? localStorage.layout : false;
      const layout = cachedLayout ? cachedLayout : layouts.landing;

      commit(mutations.SetLayout, layout);
    },
    [actions.ToggleTheme]({ commit }) {
      const currentTheme = localStorage.theme;
      const newTheme = currentTheme === themes.light ? themes.dark : themes.light;

      commit(mutations.SetTheme, newTheme);
    },
  },
  modules: {},
});

export const themes = {
  light: "light",
  dark: "dark",
};

export const layouts = {
  centered: "centered",
  sidebar: "sidebar",
  landing: "landing",
};
