import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import Blog from '../views/Blog.vue'
import BlogView from '../views/BlogView.vue'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AvoutView.vue')
    // },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog-view',
      name: 'blog-view',
      component: BlogView
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    },
  ]
})

export default router
