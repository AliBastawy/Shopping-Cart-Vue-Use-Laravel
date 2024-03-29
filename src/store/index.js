import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: [],
    // laravelHost: 'http://127.0.0.1:8000/'
    laravelHost: 'https://shoppingcartlaravel.herokuapp.com/'
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) return item.order
      else return null
    },
    cartItems: state => state.cart,
    // Calculate Total Price
    cartTotal: state => state.cart.reduce((a,b) => a + (b.price * b.order), 0),
    laravelWeb: state => state.laravelHost
  },
  mutations: {
    addToCart: (state, product) => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        item.order++
      }
      else {
        state.cart.push({...product, order: 1})
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart: (state, product) => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        if (item.order > 1)
          item.order--
        else 
          state.cart = state.cart.filter(i => i.id !== product.id)
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage : (state) => {
      const cart = localStorage.getItem('cart')
      if (cart)
        state.cart = JSON.parse(cart)
    },
    removeAllProducts: () => {
      updateLocalStorage([])
    }
  },
  actions: {
  },
  modules: {
  }
})
