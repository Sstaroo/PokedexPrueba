import {createRouter,createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Detail from "../views/Detail.vue"

//Creamos nuestro manejado de rutas
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
    //definimos las rutas que utilizaremos
	routes: [
		 {
		  path: "/",
		  name: "Home",
		  component: Home
         },
         {
            path:"/Detail/:id",
            name: "Pokemon Detail",
            component: Detail
         }
		]
})

export default router