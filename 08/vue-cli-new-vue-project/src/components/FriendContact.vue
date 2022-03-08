<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">{{ buttonMsg }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="showingDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '0' || value === '1';
      // },
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('ID is missing!');
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      showingDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showingDetails = !this.showingDetails;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  },
  computed: {
    buttonMsg() {
      return this.showingDetails ? 'Hide' : 'Show';
    },
  },
};
</script>
