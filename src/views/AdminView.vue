<template lang="">
    <div>
        <adminUser></adminUser>
        <admin></admin>
    </div>
</template>
<script>
import admin from '../components/AdminProduct.vue'
import AdminUser from '@/components/AdminUser.vue';
export default {
    components : {
        admin,
        AdminUser
    }
}
</script>
<style lang="">
    
</style>