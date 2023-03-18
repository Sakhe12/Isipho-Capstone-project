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
          <img :src="book.imgURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ book.bookName }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <p class="card-text">R{{ book.price }}</p>
            
              <router-link v-if="loggedUser" :to="{name:'product', params: {id: book.bookID} }" class="btn btn-danger">
                View More
              </router-link>
            
    
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

</style>
