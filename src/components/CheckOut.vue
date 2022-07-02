<template>
  <div class="check">
    <div class="info">
      <h1>CHECKOUT</h1>
      <p>
        Your personal and financial information are transmitted
      </p>
      <p>
        Over SSL Secured Connection using 256 bit bank level encryption
      </p>

      <button @click="showCheckout">Pay with Stripe Checkout</button>
      <div class="icons">
        <img src="@/assets/visa.png" alt="">
        <img src="@/assets/american-express.png" alt="">
        <img src="@/assets/discover.png" alt="">
        <img src="@/assets/maestro.png" alt="">
      </div>
    </div>
    <div>
      <CheckoutCard
        :items = items
      />
    </div>
  </div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'

export default {
  name: 'CheckOut',
  components: {
    CheckoutCard,
  },
  props: {
    items: Array,
  },
  data() {
    this.publishableKey = 'pk_test_51LEwj8KwHhxzhn4R99v38nidybnhEP5g2HYthZJgBPTHcIqwhuSNXZr7LxSTNzJgyK6NwvlWs0KbfLCPbB061Kuo000vuoCdTn'
    return {
      loading: false,
      lineItems: [],
      successURL: document.URL + 'success',
      cancelURL: document.URL + 'error',
    }
  },
  methods: {
    showCheckout(e) {
      e.preventDefault()
      document.querySelector('.form-container').classList.add('display')
    }
  },
}
</script>

<style scoped>
p {
  text-transform: uppercase;
  margin-bottom: 15px;
}
h1, p {
  color: #a3a3a3;
}
button {
  background-color: #329DDF;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px;
}
.icons {
  margin-top: 20px;
}
.icons img {
  display: inline-block;
  height: 80px;
  margin-right: 20px;
}

.check {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;
}
.check:after {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTUTpAPRiYYur-SNmkPnvWP2LnY_rnURSLw&usqp=CAU);
  content: "";
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-position: center;
  background-attachment: fixed;
  background-size: contain;
}

.cart-info, .form-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.form-container {
  z-index: 10;
  display: none;
  /* background-color: #9d9d9da3; */
  background-color: #000000cf;
}

.display {
  display: block;
}
</style>