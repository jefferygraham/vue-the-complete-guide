const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'jeff',
          name: 'Jeff',
          phone: '(202) 476 - 1994',
          email: 'jeff@example.com',
        },
        {
          id: 'jeffery',
          name: 'Jeffery',
          phone: '(476) 202 - 1994',
          email: 'jeffery@example.com',
        },
      ],
    };
  },
  computed: {
    buttonMsg() {
      return this.showDetails ? 'Hide' : 'Show';
    },
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{buttonMsg}} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: 'jeff',
        name: 'Jeff',
        phone: '(202) 476 - 1994',
        email: 'jeff@example.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
  computed: {
    buttonMsg() {
      return this.showDetails ? 'Hide' : 'Show';
    },
  },
});

app.mount('#app');
