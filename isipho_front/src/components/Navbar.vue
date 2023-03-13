<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-dark top">
            <div class="container-fluid">
              <a class="navbar-brand logo" href="#">Isipho: A Gift From Africa</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                  <li class="nav-item">
                    <router-link class="txt" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/about">About Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/admin">admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/sign_in">Sign In / Register</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/userProfile">Cart</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
    name: 'navbar_bar'
}
</script>
<style >
.top {
  background-color: #CBE4DE;
}
    .txt {
        text-decoration: none;
    }
    .logo {
        font-family: 'Pacifico', cursive;
    }
</style>