<template lang="">
    <div class="container">
        <addUsers></addUsers>
        <adminUser></adminUser>
        <addBooks></addBooks>
        <admin></admin>
    </div>
</template>
<script>
import addUsers from '@/components/AddUsers.vue'
import admin from '@/components/AdminProduct.vue'
import AdminUser from '@/components/AdminUser.vue';
import addBooks from '@/components/AddBooks.vue'
export default {
    components : {
        addUsers,
        admin,
        AdminUser,
        addBooks
    },
 
}
</script>
<style scoped>
    .container {
        min-height: 120vh;
    }
</style>