<template lang="">
    <div class="container" v-if="books">    
      <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
        <h2 class="display-2"><strong>Books</strong></h2>
        <div
          class="card"
          style="width: 18rem"
          v-for="book in books"
          :key="book"
        >
          <img :src="book.imgURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ book.bookName }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <p class="card-text">{{ book.price }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchBooks");
    let books = computed(() => store.state.books);
    return {
      books,
    };
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
