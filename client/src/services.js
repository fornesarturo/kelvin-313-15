import axios from 'axios'

const BASE_URL = "localhost:3000/api/"

export default {
  getMessages: ({ clubId, bookId }) => {
    return axios.post(`${BASE_URL}/Messages/getMessages`, { 'clubId': clubId, 'bookId': bookId })
  },
  addMessage: ({ clubId, bookId, author, message }) => {
    return axios.post(`${BASE_URL}/Messages`, { 'text': message, 'author': author, 'clubId': clubId, 'bookId': bookId });
  },
  getUser (email) {

  },
  login (email, password) {
    
  }
}