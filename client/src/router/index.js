import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Register from '@/components/Register'
import Store from '@/components/Store'
import Posts from '@/components/Posts'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts 
    }
  ]
})
