const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount(``);
}, 5000);

const app2 = Vue.createApp({
  template: `
    <p>{{favFood}}</p>
  `,
  data() {
    return {
      favFood: "Pizza",
    };
  },
});

app2.mount("#app2");

const data = {
  message: "Hello,",
  longMsg: "Hello, World!",
};

const handler = {
  set(tgt, key, val) {
    if (key === "message") {
      tgt.longMsg = val + " World!";
    }
    tgt.message = val;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hi,";

// console.log(proxy.longMsg);
