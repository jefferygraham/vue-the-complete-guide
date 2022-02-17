const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   this.fullName = value === '' ? '' : `${value} ${this.lastName}`;
    // },
    // lastName(value) {
    //   this.fullName = value === '' ? '' : `${this.name} ${value}`;
    // },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return `${this.name} ${this.lastName}`;
      }
    },
  },
  methods: {
    outputFullName() {
      console.log('Running again..');
      return this.name === '' ? '' : `${this.name} Graham`;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
