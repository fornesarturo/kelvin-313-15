import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

const vuexLocalStorage = createPersistedState({
    key: 'kelvin-local-storage'
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    actions: {

    },
    mutations: {

    },
    getters: {

    },
    plugins: [
        vuexLocalStorage
    ]
})