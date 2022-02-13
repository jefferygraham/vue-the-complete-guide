const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Make $100,000+',
      courseGoalB: 'Make cool stuff',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      console.log(this);
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount('#user-goal');
