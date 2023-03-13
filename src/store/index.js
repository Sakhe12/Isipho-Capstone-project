import { createStore } from 'vuex'
import axios from 'axios'

const Isipho = "https://isipho-capstone.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    books: null,
    book: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
    setBooks(state, values) {
      state.books = values
    },
    setBook(state, values) {
      state.book = values
    },
    setSpinner(state, values) {
      state.showSpinner = values
    },
    setMessage(state, values) {
      state.message = values
    }
  },
  actions: {
    async login(context, payload) {
      const result = await axios.post(`${Isipho}login`, payload);
      const {res, err} = await result.data;
      if (res) {
        context.commit('setUser', result);
      } else{
        context.commit('setMessage', err)
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${Isipho}register`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.get(`${Isipho}users`, payload);
      console.log(await res.data);
      if(res.data !== undefined) {
        context.commit('setUsers', res.data);
      }else {
        context.commit('setUsers', res.data);
      }
  }, 
    async fetchUserById(context, id) {
      const res = await axios.get(`${Isipho}users/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
  },
  async updateUser(context, payload) {
    const res = await axios.post(`${Isipho}user`, payload);
    const {msg, err} = await res.data;
    if(msg) {
      context.commit('setUser', msg);
    }else {
      context.commit('setUser', err);
    }
  },
  async fetchBooks(context){
    const res = await axios.get(`${Isipho}books`);
    console.log(await res.data.results)
    if(res.data !== undefined){
      context.commit('setBooks', res.data.results)
    } else {
      context.commit('setBooks', res.data)
    }
  },
  async addBooks(context, payload){
    const res = await axios.post(`${Isipho}book`, payload);
    const {result, err} = await res.data;
    if(result){
      context.commit('setMessage', result)
    } else {context.commit('setMessage', err);}
  },
  },
  modules: {
  }
})
