new Vue({
  el: "#app",

  data: {
    clickClass: false,
    color: "",
  },
  computed: {
    divClass: function () {
      return {
        yellow: this.clickClass,
        blue: !this.clickClass,
      };
    },
  },
});
