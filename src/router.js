import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    meta: {
      KeepAlive: true
    },
    component: () => import(`./markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    meta: {
      KeepAlive: true
    },
    component: () => import('./views/Blog.vue'),
    children
  }
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', 
      meta: {
        KeepAlive: false
      },
      component: Home
    },

    ...blogRoutes
  ], scrollBehavior() {
    return { x: 0, y: 0 }
  }

})
