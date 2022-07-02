<template>
  <div class="home">
    <div></div>
    <div class="products">
      <div class="shop-container">
        <ShopCart :item=item :key="item.id" v-for="item in items"/>
      </div>
    </div>
    <div class="checkout">
      <span> {{ cartItems }} </span>
      <h3>
        $ {{ cart_Total }}
        <router-link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
      </h3>
      <router-link to="/Checkout">Checkout</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopCart from '@/components/ShopCart.vue'

export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  components: {
    ShopCart,
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
        const res = await fetch(this.$store.getters.laravelWeb + "api/products");
        const data = await res.json();
        this.items = data.products;
    },
  },
  computed: {
    cart_Total() {
      return this.$store.getters.cartTotal
    },
    cartItems() {
      let items = this.$store.getters.cartItems
      let items_count = 0
      items.forEach(element => {
        items_count += element.order
      });
      return items_count
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding-bottom: 15px;
  border-bottom: 2px solid;
}
.products {
  position: relative;
}
.products:after {
  content: "";
  background-image: url(https://static.vecteezy.com/system/resources/thumbnails/001/225/154/small/black-low-poly-geometric-background.jpg);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-position: center;
  background-attachment: fixed;
}
.checkout {
  padding-right: 10px;
  span {
    border-radius: 50%;
    background-color: orange;
    font-weight: bold;
    padding: 5px;
  }
  h3 {
    margin-top: 15px;
  }
  a {
    padding: 10px;
    display: inline-block;
    background-image: linear-gradient(to right, #D98014, #AD3970);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
  }
}
.shop-container {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding-top: 30px;
  padding-bottom: 5px;
  border-bottom: 5px solid;
}
</style>