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
            <tbody v-for="stock in books" :key="stock.bookID">
              <tr>
                <td>{{stock.bookID}}</td>
                <td>{{stock.bookName}}</td>
                <td>{{stock.bookDescription}}</td>
                <td>{{stock.author}}</td>
                <td>R{{stock.price}}</td>
                <td><img :src="stock.imgURL" class="card-img-top" alt="" /></td>
                <td><!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary"  :data-bs-target="'#EditModal'+ `${stock.bookID}`" @click="Update">
                    Edit
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" :id="'#EditModal' + `${stock.bookID}`" tabindex="-1" :aria-labelledby="'exampleModalLabel' + stock.bookID" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          
                          <form class="form" @submit.prevent="Update(stock)">
            
                            <input type="text" placeholder="bookName" v-model="stock.bookName">
                
                            <input type="text" placeholder="Description" v-model="stock.bookDescription">
                            
                            <input type="text" placeholder="Author" v-model="stock.author">
                    
                            <input type="text" placeholder="price" v-model="stock.price">
                
                            <input type="text" placeholder="Category" v-model="stock.category">
                
                            <input type="text" placeholder="Image" v-model="stock.imgURL">
                        </form>

                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td><button class="btn btn-primary"  @click="deleteBook(stock.bookID)">delete</button></td>
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
    const shop = useStore();

const Update = (stock)=> {
  console.log(stock)
  return shop.dispatch('updateBook', {
    bookID: stock.bookID,
    book: {
      bookName: stock.bookName,
      bookDescription: stock.bookDescription,
      author: stock.author,
      price: stock.price,
      category: stock.category,
      imgURL: stock.imgURL
    }
  })
}
    return {
      
      books,
      Update
    }
    
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