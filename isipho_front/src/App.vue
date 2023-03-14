<template>
  <navbar></navbar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components : {
    navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*min-height: 110vh;*/
  background-color: #80A6AD;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  transition: col 0.6s;
}

nav a.router-link-exact-active {
  text-shadow: 0 0 10px #658864,
               0 0 10px #658864,
               0 0 10px #658864,
               0 0 10px #658864
}
</style>

