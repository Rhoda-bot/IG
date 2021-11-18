import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/signup'
import Signin from '../components/signin'
import Dashboard from '../components/dashboard'
import Profile from '../components/profile'
import Post from '../components/post'
import UserPost from '../components/userPost'
import ViewPost from '../components/viewPost'

const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/user-post',
    name: 'UserPost',
    component: UserPost
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/viewPost',
    name: 'ViewPost',
    component: ViewPost,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
