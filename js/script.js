

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data(){
        return {
            tasks: [],
            newTask: { 
                text: '',
                done: false,
                id: null
                }
        }
    },
    methods: {
        addNewTask(){

            const data = {
                tasks: { 
                    text: this.newTask.text,
                    done: false,
                    id: this.newId
                    }
            }
            const config = {
                headers: { 'Content-Type': 'multipart/form-data'}
            }

            axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
            .then(res => {
                this.tasks.push(data.tasks)
            })
            this.newTask = 
                { 
                text: '',
                done: false,
                id: null
                }
        },
    },
    computed: {

        newId() {
            let actualId = this.tasks.reduce((result, task) => task.id > result ? task.id : result, 0)
                return ++actualId;
            },
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