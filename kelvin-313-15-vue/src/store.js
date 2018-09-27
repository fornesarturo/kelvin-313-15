import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate'

// const vuexLocalStorage = createPersistedState({
//     key: 'kelvin-local-storage'
// })

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: [],
        clubs: [],
        navBarDisplay: false,
        email: ''
    },
    actions: {
        fetchClubs (context, user) {
            context.state.clubs = [
                { id: "0", title: "Hola", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "1", title: "Hola1", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "2", title: "Hola2", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "3", title: "Hola3", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "4", title: "Hola4", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "5", title: "Hola5", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "6", title: "Hola6", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "7", title: "Hola7", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "8", title: "Hola8", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" },
                { id: "9", title: "Hola9", description: "Description", image: "https://via.placeholder.com/350x150", participants: ["victor@gmail.com", "arturo@zubut.com"], currentBook: "Pride and Prejudice" }
            ]
        },
        fetchMessages (context, id) {
            context.state.messages = [
                { id: "0", author: "arturo@zubut.com", text: "Demasiado predecible" },
                { id: "0", author: "victor@gmail.com", text: "Me hizo sentir cosas que no sabía que eran posibles sentir..." }
            ]
        }
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
        getClubs (state) {
            return state.clubs
        },
        getClub (state) {
            return clubId => {
                const club = state.clubs.filter(club => club.id == clubId)
                return club.length > 0 ? club[0]: null
            }
        },
        getEmail(state) {
            return state.email
        }
    }
    // ,
    // plugins: [
    //     vuexLocalStorage
    // ]
})
