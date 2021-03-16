import Vue from 'vue'
import Router from 'vue-router'
import myHomePage from '@/components/myHomePage'
import projects from '@/components/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myHomePage',
      component: myHomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects,
      meta: {
        title: 'My Projects'
      } 
    }
  ]
})