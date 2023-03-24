<!-- eslint-disable vue/no-parsing-error -->
<template lang="">
    <spinner v-if="loading"/>
    <div class="container" v-else>    
      <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
        <h2 class="display-2"><strong>Books</strong></h2>
        <div
          class="card"
          style="width: 18rem"
          v-for="book in books"
          :key="book.bookID"
        >
          <img :src="book.imgURL" class="card-img-top img" alt="" />
          <div class="card-body">
            <div class="tracker"></div>
            <h5 class="card-title">{{ book.bookName }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <p class="card-text">R{{ book.price }}</p>
            
              <router-link v-if="loggedUser" :to="{name:'product', params: {id: book.bookID} }" class="btn btn-danger">
                View More
              </router-link>
              <button type="button" class="btn btn-danger">Danger</button>
            
    
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Spinner from '../components/Spinner.vue'
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  components : {
    Spinner
  },
  created() {
      setTimeout(() => {
          this.loading = false
      }, 2000)
  },
  
  setup() {
    const store = useStore();
    store.dispatch("fetchBooks");
    let books = computed(() => store.state.books);
    return {
      books
    };
  },
  data(){
    return {
        loading: true
    }
  },
  computed:{
    loggedUser () {
      return this.$store.state.loggedUser
    },
  },
  name: "products_cust",
};
</script>
<style scoped>
 .card {
    background-color: #CBE4DE;
    box-shadow: 0px 0px 30px #405357;
    border-radius: 1px solid silver;
 }
 .card:hover {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
 }
 .img:hover {
  transform: scale(0.95);
}
  
</style>
