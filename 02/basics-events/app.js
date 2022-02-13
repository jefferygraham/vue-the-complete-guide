const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
      this.name = `${e.target.value} ${lastName}`;
    },
    handleSignUpSubmit() {
      console.log('Submitting...');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
