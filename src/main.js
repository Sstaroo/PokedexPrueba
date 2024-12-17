import './assets/main.css'
import router from "./router"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
//Ahora antes de montar la app, le diremos que maneje las rutas con nuestro "manejador" creado
app.use(router)
app.mount('#app')
