import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '@/views/Post.vue';
import PolicyPrivacy from '@/views/policyPrivacy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path:'/post/:id', component:Post },
  { path:'/privacy-policy', component: PolicyPrivacy}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
