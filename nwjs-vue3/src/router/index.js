import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index.vue')
  },
  // 测试页
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
