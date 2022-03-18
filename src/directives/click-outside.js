export const ClickOutside = {
  bind: function (el, binding, vNode) {
    const { handler, exclude } = binding.value;

    const clickedOnExcludeElement = function (target) {
      return exclude
        .map((x) => vNode.context.$refs[x])
        .some((x) => {
          const el = x.$el != null ? x.$el : x;
          return el.contains(target);
        });
    };

    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target) || clickedOnExcludeElement(event.target))) {
        vNode.context[handler]();
      }
    };

    document.body.addEventListener("touchstart", el.clickOutsideEvent);
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener("touchstart", el.clickOutsideEvent);
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
