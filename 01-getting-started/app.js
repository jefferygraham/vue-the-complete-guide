Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');

// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const unorderedListElement = document.querySelector('ul');

// function AddGoal() {
//   const enteredValue = inputElement.value;
//   const listItemElement = document.createElement('li');
//   listItemElement.textContent = enteredValue;
//   unorderedListElement.appendChild(listItemElement);
//   inputElement.value = '';
// }

// buttonElement.addEventListener('click', AddGoal);
