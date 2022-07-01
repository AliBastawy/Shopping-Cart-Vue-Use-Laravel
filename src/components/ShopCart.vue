<template>
  <div>
    <div class="cart">
        <div class="head">
          <h3>{{ item.name }}</h3>
          <div class="info">
            <h5>${{ item.price }}</h5>
            <button @click="addToCart()">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <p>
            {{ item.body }}
        </p>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
  props: {
      item: Object
  },
  data() {
      return {
        itemObj: [{}],
        show: false,
      };
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.item)
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.item)
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  background-color: #6a696959;
  margin: 10%;
  width: 80%;
  padding: 10px 15px;
  box-shadow: 0 0 5px grey;
  border-radius: 5px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #D98014;
  }
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info h5 {
  padding: 0 10px;
  color: #AD3970;
}
button {
  padding: 5px;
  border: 3px solid #D98014;
  cursor: pointer;
  font-size: 1.15rem;
  background-color: transparent;
  color: white;
}
@media (min-width: 500px) {
  .cart {
    width: 280px;
    margin: 10px;
  }
}

.cart p {
  margin-bottom: 10px;
}
</style>
