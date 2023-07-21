

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


    methods: {
        addNewTask(){

            const data = { task: this.newTask }
            const config = {
                headers: { 'Content-Type': 'multipart/form-data'}
            }

            axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
            .then(res => {
                console.log(res.data)
                this.tasks.push(res.data)
                this.newTask = '';
            })
        },
        // removeTask(target){
        //     const config = {
        //         headers: { 'Content-Type': 'multipart/form-data'}
        //     }

        //     axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
        //     .then(res => {
        //         this.tasks = this.tasks.filter(task => target !== task.id)
        //     })
              
        //   },
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