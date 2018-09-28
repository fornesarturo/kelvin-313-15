import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import ClubsPage from './components/Clubs/ClubsPage.vue'
import ClubDetail from './components/Clubs/ClubDetail/ClubDetail.vue'
import Login from './components/Login/Login.vue'
import PublicPage from './components/Public/PublicPage.vue'
import PublicDetail from './components/Public/PublicDetail/PublicDetail.vue'

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
        },
        {
            path: '/clubs/:id',
            name: 'club',
            component: ClubDetail
        },
        {
            path: '/public',
            name: 'public',
            component: PublicPage
        },
        {
            path: '/public/:id',
            name: 'book',
            component: PublicDetail
        }
    ]
})
