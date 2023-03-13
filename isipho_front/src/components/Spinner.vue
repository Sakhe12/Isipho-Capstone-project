<template lang="">
    <div class="spinner">
    </div>
</template>
<script>
export default {
    name : "spinner_n"
}
</script>
<style >
    .spinner{
        width: 48px;
        height:48px;
        background-color: #2c3e50;
        display: inline-block;
        position: relative;
        top: 200px;
        animation: rotation 3s ease infinite alternate-reverse;
    }
@keyframes rotation {
    0%{
        transform: scale(1) rotate(0deg);
    }
    100% {
        transform: scale(0.3) rotate(360deg);
    }
    
}
</style>