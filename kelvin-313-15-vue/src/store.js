import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

const vuexLocalStorage = createPersistedState({
    key: 'kelvin-local-storage'
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clubs: [
            { id: "0", title: "Hola", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "1", title: "Hola1", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "2", title: "Hola2", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "3", title: "Hola3", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "4", title: "Hola4", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "5", title: "Hola5", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "6", title: "Hola6", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "7", title: "Hola7", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "8", title: "Hola8", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" },
            { id: "9", title: "Hola9", description: "Description", image: "https://via.placeholder.com/350x150", participants: [], currentBook: "Pride and Prejudice" }
        ]
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getClubs (state) {
            return state.clubs
        },
        getClub (state) {
            return clubId => {
                const club = state.clubs.filter(club => club.id == clubId)
                return club.length > 0 ? club[0]: null
            }
        }
    },
    plugins: [
        vuexLocalStorage
    ]
})