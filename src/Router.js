import CollatzComponent from './components/CollatzComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import { createRouter,createWebHistory } from 'vue-router'

const myRoutes = [
    {path:"/", component:HomeComponent},
    {path:"/collatz", component:CollatzComponent}
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;