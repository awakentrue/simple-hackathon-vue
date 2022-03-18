export default {
  data() {
    return {
      mobileMenuIsOpen: false,
    };
  },

  computed: {
    burgerButtonIcon() {
      return this.mobileMenuIsOpen ? "times" : "bars";
    },
  },

  methods: {
    toggleMobileSidebar() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },

    closeMobileSidebar() {
      if (this.mobileMenuIsOpen === false) return;
      this.mobileMenuIsOpen = false;
    },
  },

  watch: {
    $route() {
      this.closeMobileSidebar();
    },
  },
};
