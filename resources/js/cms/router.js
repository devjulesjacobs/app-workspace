import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Dashboard/Dashboard'
import Signin from './views/Auth/Signin'
import Posts from "./views/Posts/Posts"
import Team from "./views/Team/Team"
import FloorPlan from "./views/FloorPlan/FloorPlan";
import Users from "./views/Users/Users";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAdmin: true }
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: { requiresAdmin: true }
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
        meta: { requiresAdmin: true }
    },
    {
        path: '/floorplan',
        name: 'FloorPlan',
        component: FloorPlan,
        meta: { requiresAdmin: true }
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: { requiresAdmin: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
