<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @submit-form="submitForm"></user-data>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: 'Jeff Graham',
        age: 43,
      },
    };
  },
  methods: {
    submitForm(name, age) {
      this.user = {
        name,
        age: +age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>