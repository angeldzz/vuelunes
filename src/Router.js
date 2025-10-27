import CollatzComponent from './components/CollatzComponent.vue'
import { createRouter,createWebHistory } from 'vue-router'

const myRoutes = [
    {path:"/", component:CollatzComponent}
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;