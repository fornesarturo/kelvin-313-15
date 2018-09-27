import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import ClubsPage from './components/Clubs/ClubsPage.vue'
import Login from './components/Login/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/clubs',
            name: 'clubes',
            component: ClubsPage
        }
    ]
})
