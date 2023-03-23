<template lang="">
    <div>
               <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add user
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="form">
            
            <input type="text" placeholder="Name" v-model="payload.firstName">

            <input type="text" placeholder="Surname" v-model="payload.surname">
            
            <input type="text" placeholder="Gender" v-model="payload.gender">
    
            <input type="text" placeholder="cellNumber" v-model="payload.cellNumber">

            <input type="text" placeholder="Email" v-model="payload.email">

            <input type="date" placeholder="Date" v-model="payload.joinDate">

            <input type="text" placeholder="Role" v-model="payload.userRole">

            <input type="password" placeholder="Password" v-model="payload.userPass">
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click.prevent="addUser(payload)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
    setup () {
        let payload = {
        firstName: '',
        surname: '',
        gender: '',
        cellNumber: '',
        email: '',
        userPass: '',
        userRole: '',
        joinDate: '',
        };
        const store = useStore();
        const addUser = (payload)=> {
            store.dispatch("register", payload)

            store.dispatch("fetchUsers");
        }
        const users = 
        computed( ()=> store.state)
        return {
            payload,
            users,
            addUser
        }
    }
}
</script>
<style lang="">
    
</style>