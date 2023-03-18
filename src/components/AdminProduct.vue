<template>
    <div>
        <h4 class="text-bg-info-center">Products</h4>
        <table class="table table-dark">            <thead>
              <tr>
                <th scope="col">bookID</th>
                <th scope="col">bookName</th>
                <th scope="col">bookDescription</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">imgURL</th>
              </tr>
            </thead>
            <tbody v-for="stock in books" :key="stock">
              <tr>
                <td>{{stock.bookID}}</td>
                <td>{{stock.bookName}}</td>
                <td>{{stock.bookDescription}}</td>
                <td>{{stock.author}}</td>
                <td>R{{stock.price}}</td>
                <td><img :src="stock.imgURL" class="card-img-top" alt="" /></td>
              </tr>
            </tbody>
          </table>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore();
    store.dispatch("fetchBooks");
    let books = computed(() => store.state.books);
    return {
      
      books,
    };
    
    },
    name : "admin_Product"
}
</script>
<style scoped>
    
</style>