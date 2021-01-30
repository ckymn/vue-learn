new Vue({
  el: "#app",
  data: {
    number: 0,
    x: 0,
    y: 0,
    name: "Muhammet",
    deger: 0,
    secondDeger: 0,
  },
  methods: {
    plusNumber: function () {
      this.number++;
    },
    minusNumber: function () {
      this.number--;
    },
    updateCoords: function (step, event) {
      this.number += step;
      this.x = event.clientX;
      this.y = event.clientY;
    },
    showEnter: function (event) {
      alert(event.target.value);
    },
    increaseAndDecrease: function () {
      console.log("Methods calisti...");
      return this.deger > 10 ? "buyuk" : "kucuk";
    },
  },
  computed: {
    output: function () {
      console.log("Computed calisti...");
      return this.deger > 10 ? "buyuk" : "kucuk";
    },
  },
  watch: {
    secondDeger: function (value) {
      setTimeout(() => {
        this.secondDeger = 0;
      }, 2000);
    },
  },
});
