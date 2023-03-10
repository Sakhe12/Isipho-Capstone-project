<template>
  <div class="home">
    <home></home>
    <router-view></router-view>
  </div>
</template>

<script>

import home from '../components/Home.vue'
export default {
  components: {
    home
  }
}
</script>
