<template lang="">
    <div>
        <div class="container">
            <img :src="book?.imgURL" class="card-img-top img" alt="" />
            <p>Name: {{book?.bookName}}</p>
            <p>Book Description: {{book?.bookDescription}}</p>
            <p>Price: R{{book?.price}}</p>
            <button class="btn bg-primary"></button>
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core'
import {useStore} from 'vuex';
export default {
        name: 'ProductC',
    setup() {
        const store = useStore()
        let book = computed(() => store.state.book);
    return {
      book,
    };
    },
    mounted() {
        this.$store.dispatch('fetchBook', this.$route.params.id)
    },
    
}
</script>
<style scoped>
.img {
    margin-top: 1vh;
    height: 58vh;
    width: 40%;
}
    
</style>