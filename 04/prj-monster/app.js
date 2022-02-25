function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: `${this.monsterHealth}%` };
      }
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: `${this.playerHealth}%` };
      }
    },
    mayUseSpecial() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(val) {
      if (val <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (val <= 0) {
        this.winner = "Monster";
      }
    },
    monsterHealth(val) {
      if (val <= 0 && this.playerHealth <= 0) {
        this.winner = "Draw";
      } else if (val <= 0) {
        this.winner = "Player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMsg("Player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMsg("Monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMsg("Player", "special attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMsg("Player", "heal", healValue);
      this.attackPlayer();
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    surrender() {
      this.winner = "Monster";
    },
    addLogMsg(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
