<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/Checkout">Checkout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://kit.fontawesome.com/826d0ee6b3.js')
    externalScript.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(externalScript)
  },
}
</script>


<style lang="scss">
body {
  background-color: #0D0D0D;
  overflow-x: hidden;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  line-height: 30px;
  border-bottom: 1px solid;
  color: #fff;

  a {
    font-weight: bold;
    color: #fff;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;
    text-decoration: none;
  }
}
</style>
