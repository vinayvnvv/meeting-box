import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../modules/dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/my-tasks',
    name: 'My Tasks',
    component: () => import('../modules/other-screens'),
  },
  {
    path: '/my-projects',
    name: 'My Projects',
    component: () => import('../modules/other-screens'),
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../modules/other-screens'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../modules/other-screens'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../modules/other-screens'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../modules/other-screens'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

// { label: 'DashBoard', url: '/dashboard', icon: 'ion-ios-home-outline' },
// { label: 'My Tasks', url: '/my-tasks', icon: 'ion-ios-checkmark-outline' },
// { label: 'My Projects', url: '/my-projects', icon: 'ion-document' },
// { label: 'People', url: '/people', icon: 'ion-ios-people-outline' },
// { label: 'Statistics', url: '/statistics', icon: 'ion-ios-pie-outline' },
// ],
// footer: [
// { label: 'Help', url: '/help', icon: 'ion-ios-help-outline' },
// { label: 'Settings', url: '/settings', icon: 'ion-ios-gear-outline' },
