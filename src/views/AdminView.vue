<template lang="">
    <div class="container">
        <adminUser></adminUser>
        <addBooks></addBooks>
        <admin></admin>
    </div>
</template>
<script>
import admin from '../components/AdminProduct.vue'
import AdminUser from '@/components/AdminUser.vue';
import addBooks from '@/components/AddBooks.vue'
export default {
    components : {
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