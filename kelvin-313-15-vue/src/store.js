import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

const vuexLocalStorage = createPersistedState({
    key: 'kelvin-local-storage'
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navBarDisplay: false,
        email: ''
    },
    actions: {

    },
    mutations: {
        setNavBarDisplay (state, display) {
            state.navBarDisplay = display
        },
        setEmail(state, email) {
            state.email = email
        }
    },
    getters: {
        getEmail(state) {
            return state.email
        }
        
    },
    plugins: [
        vuexLocalStorage
    ]
})
