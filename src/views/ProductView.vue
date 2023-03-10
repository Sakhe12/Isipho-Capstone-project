<template lang="">
    <div>
       <products></products>
    <router-view></router-view> 
    </div>
</template>
<script>
import products from '../components/Products.vue'
export default {
    components : {
        products
    }
}
</script>
<style lang="">
    
</style>