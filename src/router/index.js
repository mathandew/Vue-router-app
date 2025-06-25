import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Simple dummy auth
const isLoggedIn = false

router.beforeEach((to, from, next) => {
  if (to.name === 'Dashboard' && !isLoggedIn) {
    alert("You're not logged in. Redirecting to Home.")
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
