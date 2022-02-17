const app = Vue.createApp({
  data() {
    return {
      input: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Showing Alert!');
    },
    registerInput(e) {
      this.input = e.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.input;
    },
  },
});

app.mount('#assignment');
