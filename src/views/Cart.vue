<template>
  <div class="about">
    <div class="cart-info">
      <table>
        <tr>
          <th class="bold total">Item</th>
          <th class="bold">Unit Price</th>
          <th class="bold">Quantity</th>
          <th class="bold">Line Total</th>
        </tr>
        <tr
          v-for="item in cartItems"
          :key="item.id"
          class="cart"
        >
          <td class="bold total title">
            {{ item.name }}
            <button @click="removeFromCart(item)">
              <i class="fa-solid fa-minus"></i>
            </button>
          </td>
          <td>${{ item.price }}</td>
          <td>{{ item.order }}</td>
          <td>${{ item.price * item.order }}</td>
        </tr>
        <tr>
          <td colspan="3">Sub Total</td>
          <td>${{ cart_Total }}</td>
        </tr>
        <tr>
          <td colspan="3">Tax 20%</td>
          <td>${{ (cart_Total * 0.2).toFixed(2) }}</td>
        </tr>
        <tr>
          <td colspan="3">Total</td>
          <td>${{ totalWithTax }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "Cart",
  components: {
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item)
    },
  },
  computed: {
    cart_Total() {
      return this.$store.getters.cartTotal
    },
    cartItems() {
      return this.$store.getters.cartItems
    },
    totalWithTax() {
      return this.$store.getters.cartTotal + this.$store.getters.cartTotal * 0.2
    }
  },
};
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 20px;
}
button {
  color: white;
  background-color: #f00;
  padding: 9px 14px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: block;
  margin-top: 15px;
}
.total {
  text-align: left;
  padding: 20px 15px;
  font-weight: 700;
  font-size: 19px;
}
table {
  width: 100%;
  margin-top: 60px;
  color: #fff;
}
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  /* padding: 17px 0; */
  text-align: center;
  padding: 20px 15px;
  font-size: 20px;
  /* background-color: #262626; */
}
.bold {
  font-weight: bold;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
