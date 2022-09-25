<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link  to="/" class="navbar-brand" >ShoppingCart</router-link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>

<style>
@import  '/bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.grid{
  display : grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px
}
</style>
