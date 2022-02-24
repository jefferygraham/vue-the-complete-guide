const app = Vue.createApp({
    data() {
        return {
            enteredTask:'',
            tasks:[],
            showTasks: true
        }
    },
    computed:{
        buttonCaption() {
            return this.showTasks ? 'Hide List': 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleTasks() {
            this.showTasks = !this.showTasks;
        }
    }
})

app.mount('#assignment')