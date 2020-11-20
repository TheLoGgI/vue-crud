import { createRouter, createWebHistory } from 'vue-router'
import Collection from '../views/Collection.vue'

const routes = [
  {
    path: '/',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('../views/Delete.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
