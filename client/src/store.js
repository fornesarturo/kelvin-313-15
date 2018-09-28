import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate'

// const vuexLocalStorage = createPersistedState({
//     key: 'kelvin-local-storage'
// })

import mockDB from './mockDB.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        messages: [],
        clubs: [],
        navBarDisplay: true,
        email: ''
    },
    actions: {
        fetchClubs (context, user) {
            if (context.state.clubs.length == 0) {
                context.state.clubs = mockDB.clubs
            }
        },
        fetchBooks (context) {
            if (context.state.books.length == 0) {
                context.state.books = mockDB.books
            }
        },
        fetchMessages (context, id) {
            if (context.state.messages.length == 0) {
                context.state.messages = mockDB.messages
                if (id != null)
                    context.state.messages = mockDB.messages.filter(message => message.id == id)
            } else if (id != null) {
                context.state.messages = mockDB.messages.filter(message => message.id == id)
            }
        }
    },
    mutations: {
        setNavBarDisplay (state, display) {
            state.navBarDisplay = display
        },
        setEmail(state, email) {
            state.email = email
        },
        addMessage(state, { id, text }) {
            state.messages.push({ id: id, text: text, author: state.email })
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
        getBook (state) {
            return bookId => {
                const book = state.books.filter(book => book.id == bookId)
                return book.length > 0 ? book[0]: null
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
