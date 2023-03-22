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
                <th scope="col">edit</th>
                <th scope="col">delete</th>
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
                <td><!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div></td>
                <td><button @click="deleteBook(stock.bookID)">delete</button></td>
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
    methods: {
      deleteBook(id) {
        this.$store.dispatch("deleteBook", id)
      }
    },
    
    name : "admin_Product"
}
</script>
<style scoped>
    
</style>