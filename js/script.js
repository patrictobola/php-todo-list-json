

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data(){
        return {
            tasks: [],
            newTask: ''
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