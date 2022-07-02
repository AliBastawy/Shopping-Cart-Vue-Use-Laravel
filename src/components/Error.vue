<template>
  <div class="error">
    <div class="header">
      <img src="../assets/cross.png" alt="Error">
      <h1>Error</h1>
    </div>
    <div class="info">
      <h5>Your payment done unsuccessfully</h5>
      <h5>Check your balance &amp; Enter your card details correctly</h5>
      <h5><router-link to="/Checkout">Return To Checkout Page</router-link></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style scoped>
.error {
  color: #fff;
  margin-top: 60px;
}
.header {
  display: flex;
  align-items: center;
  place-content: center;
}
.header img {
  width: 5%;
}
</style>