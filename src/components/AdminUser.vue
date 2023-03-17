<template lang="">
    <div>
        <h4 class="text-bg-info-center">Users</h4>
        <table class="table table-dark">           
             <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">First Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Gender</th>
                <th scope="col">cellNumber</th>
                <th scope="col">email</th>
                <th scope="col">Join-date</th>
              </tr>
            </thead>
            <tbody v-for="customer in users" :key="customer">
                <tr>
                  <td>{{customer.UserID}}</td>
                  <td>{{customer.firstName}}</td>
                  <td>{{customer.surname}}</td>
                  <td>{{customer.gender}}</td>
                  <td>{{customer.cellNumber}}</td>
                  <td>{{customer.email}}</td>
                  <td>{{customer.joinDate}}</td>
                </tr>
              </tbody>
            </table>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
 setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
    let users = computed(() => store.state.users)
    return{
        users,
    }
 },
  name : "user_component"
}
</script>
<style lang="">
    
</style>