// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      name: 'Jeff',
      age: 43,
      imgUrl:
        'https://randomwordgenerator.com/img/picture-generator/tools-1209764_640.jpg',
    };
  },
  methods: {
    pickNum() {
      return Math.random();
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});
app.mount('#assignment');
