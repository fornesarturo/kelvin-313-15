import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import ClubsPage from './components/Clubs/ClubsPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/clubs',
            name: 'clubes',
            component: ClubsPage
        }
    ]
})