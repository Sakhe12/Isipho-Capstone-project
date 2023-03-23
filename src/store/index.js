import { createStore } from 'vuex'
import axios from 'axios'
// import { useCookies } from 'vue3-cookies'

const Isipho = "https://isipho-capstone.onrender.com/"
// const { allowCookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    books: null,
    book: null,
    showSpinner: true,
    message: null,
    loggedUser: false,
    admin: false,
    jwToken: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
      state.loggedUser = true
      state.admin = true
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
    },
    setLoggedUser(state, values) {
      state.loggedUser = values
    },
    setAdmin(state, values) {
      state.admin = values
    },
    setToken(state, jwToken) {
      state.jwToken = jwToken
    },
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${Isipho}login`, payload);
      const {result, err,} = await res.data;
      if (result) {
        context.commit('setLoggedUser', result);
        context.commit('setAdmin', result);
        // context.commit('setToken', jwToken);
        // await allowCookies.set('setUser', jwToken)
        // console.log(result);
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
    async fetchUsers(context) {
      const res = await axios.get(`${Isipho}users`);
      let {results, err} = await res.data
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
  }, 
    async fetchUserById(context, id) {
      const res = await axios.get(`${Isipho}user/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
  },
  async deleteUser(context, id){
    const res = await axios.delete(`${Isipho}user/${id}`);
    const{msg, err} = await res.data;
    if (msg) {
      context.commit('setUsers', msg[0])
      console.log(msg);
      this.dispatch('fetchUsers');
    } else {
      context.commit('setMessage', err)
    }
  },
  async updateUser(context, payload) {
    const res = await axios.put(`${Isipho}user`, payload);
    const {msg, err} = await res.data;
    if(msg) {
      context.commit('setUser', msg);
    }else {
      context.commit('setUser', err);
    }
  },
  async deleteBook(context, id){
    const res = await axios.delete(`${Isipho}book/${id}`);
    const{msg, err} = await res.data;
    if(msg){
      context.commit('setBooks', msg[0]);
      console.log(msg);
      this.dispatch('fetchBooks');
    } else {
      context.commit('setMessage', err)
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
  async fetchBook(context, id){
    const res = await axios.get(`${Isipho}book/${id}`);
    console.log(await res.data.results)
    if(res.data !== undefined){
      context.commit('setBook', res.data.results[0])
    } else {
      context.commit('setBook', res.data)
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
