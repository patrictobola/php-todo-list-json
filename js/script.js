console.log('JS OK', Vue)

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data(){
        return {
            vue: "ok"
        }
    }
})
app.mount("#app");