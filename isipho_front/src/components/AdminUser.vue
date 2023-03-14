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
            <tbody v-for="cust in Users" :key="cust">
                <tr>
                  <td>{{cust.UserID}}</td>
                  <td>{{cust.firstName}}</td>
                  <td>{{cust.surname}}</td>
                  <td>{{cust.gender}}</td>
                  <td>{{cust.cellNumber}}</td>
                  <td>{{cust.email}}</td>
                  <td>{{cust.joinDate}}</td>
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
    let Users = computed(() => store.state.Users)
    return{
        Users,
    }
 },
  name : "user_component"
}
</script>
<style lang="">
    
</style>