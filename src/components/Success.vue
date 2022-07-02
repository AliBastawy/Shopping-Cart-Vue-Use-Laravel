<template>
  <div class="success">
    <div class="header">
      <img src="../assets/check-mark.png" alt="Correct">
      <h1>Congratulations</h1>
    </div>
    <div class="info">
      <h5>Your payment done successfully</h5>
      <h5>Thanks for using our App</h5>
      <h5><router-link to="/">Return To Home Page</router-link></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>
.success {
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