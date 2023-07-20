

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data(){
        return {
            tasks: [],
            newTask: { 
                text: '',
                done: false
                }
        }
    },
    methods: {
        addNewTask(newTask){

            const data = {
                tasks: newTask
            }
            const config = {
                headers: { 'Content-Type': 'multipart/form-data'}
            }

            axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
            .then(res => {
                this.tasks.push(newTask)
            })
        }
    },
    created(){
        axios.get('http://localhost/php-todo-list-json/api/tasks/').then(res => {
            this.tasks = res.data
          }).catch(err => {
            console.log(err.message)
          })
    },
})
app.mount("#app");