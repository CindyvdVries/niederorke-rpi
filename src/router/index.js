import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SensorDetails from '../views/SensorDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:sensor',
    component: SensorDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
