new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
    logs: [],
    logs_text: {
      attack: "TURMP ATAGI",
      monster_attack: 'GODZILLA ATAGI',
      speacial_attack: "TURMP ATAGI",
      heal_up: "ILK YARGIM",
      give_up: "OYUNCU PES ETTI"
    }
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      const point = Math.ceil(Math.random() * 10);
      this.monster_heal -= point;
      this.add_to_log({ turn: "p", text: this.logs_text.attack +"=>"+point });
      this.monster_attack();
    },
    special_attack: function () {
      const point = Math.ceil(Math.random() * 25);
      this.monster_heal -= point;
      this.add_to_log({ turn: "p", text: this.logs_text.attack +"=>"+point });
      this.monster_attack();
    },
    heal_up: function () {
      const point = Math.ceil(Math.random() * 20);
      this.player_heal += point;
      this.add_to_log({ turn: "h", text:this.logs_text.attack +"=>"+point });
      this.monster_attack();
    },
    give_up: function () {
      const pes = confirm("Are You Sure !");
      if (pes === true) {
        this.player_heal = 0;
        this.add_to_log({ turn: "g", text:this.logs_text.attack +"=>"+point });
        this.add;
      } else {
        alert("Never Give Up TURMP 🐱‍👤🐱‍👤🐱‍👤❌");
      }
      console.log(this.player_heal);
      console.log(this.monster_heal);
    },
    monster_attack: function () {
      const point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
      this.add_to_log({
        turn: "m",
        text: this.logs_text.monster_attack +"=>"+point,
      });
    },
    add_to_log: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    player_heal: function (value) {
      if (value <= 0) {
        this.player_heal = 0;
        if (confirm("FUCK YOU TURMP ! , TRY AGAIN")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      } else if (value >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal: function (value) {
      if (value <= 0) {
        this.monster_heal = 0;
        if (confirm("FUCK YOU GODZILLA ! , TRY AGAIN")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      }
    },
  },
  computed: {
    user_progress: function(){
      return {
        width: this.player_heal +"%"
      }
    },
    monster_progress: function(){
      return {
        width: this.monster_heal +"%"
      }
    }
  }
});
