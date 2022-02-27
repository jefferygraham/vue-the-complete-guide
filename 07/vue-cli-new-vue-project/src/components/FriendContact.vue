<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ buttonMsg }} Details</button>
    <ul v-if="showingDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showingDetails: false,
      friend: {
        id: 'jeff',
        name: 'Jeff Graham',
        phone: '123456789',
        email: 'jeff@test.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showingDetails = !this.showingDetails;
    },
  },
  computed: {
    buttonMsg() {
      return this.showingDetails ? 'Hide' : 'Show';
    },
  },
};
</script>
