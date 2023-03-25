<template lang="">
    <div>
        <div class="container">
            <img :src="book?.imgURL" class="card-img-top img" alt="" />
            <p>Name: {{book?.bookName}}</p>
            <p>Book Description: {{book?.bookDescription}}</p>
            <button @click="$event => addCarts(user, book)" type="button" class="btn btn-danger">Add To Cart</button>
            
            <p>Price: R{{book?.price}}</p>
    
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
    data() {
        return{
            UserID: '',
            bookID: ''
        }
    },
    
    methods: {
        addCarts: function (user, book) {
            return this.$store.dispatch("addCarts", {
                UserID: user?.USerID,
                bookID: book?.bookID
            })
        },
    }
}
</script>
<style scoped>
.img {
    margin-top: 1vh;
    height: 100%;
    width: 60%;
}

</style>