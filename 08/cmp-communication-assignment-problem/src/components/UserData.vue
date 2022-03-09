<template>
  <section>
    <form @submit.prevent="submitForm">
      <div>
        <label>Name:</label>
        <input v-model="enteredName" type="text" placeholder="Name" />
      </div>
      <div>
        <label>Age:</label>
        <input v-model="enteredAge" type="text" placeholder="age" />
      </div>
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['submit-form'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit-form', this.enteredName, this.enteredAge);
    },
  },
};
</script>