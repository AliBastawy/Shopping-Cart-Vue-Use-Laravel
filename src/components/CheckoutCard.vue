<template>
  <div class="form-container">
    <form class="row payment-form" id="payment-form">
      <div class="error red center-align white-text">
        {{stripeValidationError}}
      </div>
      <div id="payment-element">
        <h5 style="margin-bottom: 20px;">
            Stripe Online Payment
            <span class="right">
              <button @click="closeCheckout"/>
            </span>
        </h5>

        <div id="email" class="p-Input">
          <label for="email" class="p-FieldLabel Label Label--empty">
            Email
          </label>
          <input name="email" class="email" type="text" v-model="email" placeholder="example@example.com">
        </div>

        <div class="error red center-align white-text"></div>

        <div class="p-CardNumberInput" style="position: relative;">
          <div class="col s12 card-element p-Input">
              <label for="card-number-element" class="Label">Card Number</label>
              <div class="inpue" style="position: relative;">
                <div id="card-number-element" class="input-value p-Input-input Input p-CardNumberInput-input Input--empty p-Input-input--textRight"></div>
                <div class="p-CardIcons Input"><div style="position: relative;"><div class="p-CardBrandIcons p-CardBrandIcons--loaded p-CardBrandIcons--multiple"><div class="p-CardBrandIcons-item"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" focusable="false"></div><div class="p-CardBrandIcons-item"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" focusable="false"></div><div class="p-CardBrandIcons-item"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" focusable="false"></div><div class="p-CardBrandIcons-item p-CardBrandIcons-more"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg" focusable="false"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg" focusable="false"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg" focusable="false"><img class="p-CardBrandIcon p-CardBrandIcon--visible" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg" focusable="false"><img class="p-CardBrandIcon" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/elo-efe873e884e6c9eb817f23a120caaa3e.svg" focusable="false"></div></div><div class="p-CardKnownIcon"></div><div class="p-CardErrorIcon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--colorIconCardError)" role="presentation"><path opacity=".4" fill-rule="evenodd" clip-rule="evenodd" d="M15.337 4A5.5 5.5 0 1023 11.663V18a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h12.337zm6.707.293c.239.202.46.424.662.663a2.01 2.01 0 00-.662-.663zM3 9a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V9z"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M4 15a1 1 0 100 2h1.5a1 1 0 100-2H4zm4.8 0a1 1 0 100 2h1.5a1 1 0 100-2H8.8zm3.8 1a1 1 0 011-1h1.5a1 1 0 110 2h-1.5a1 1 0 01-1-1zm5.9-1a1 1 0 100 2H20a1 1 0 100-2h-1.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 14a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-1.719a1.031 1.031 0 100-2.062 1.031 1.031 0 000 2.062zm0-7.906a.687.687 0 00-.688.688V8.5a.687.687 0 101.375 0V5.062a.687.687 0 00-.687-.687z"></path></svg></div></div></div>
              </div>
          </div>
        </div>

        <div class="col s6 card-element p-Input">
            <label for="card-expiry-element" class="Label">Expiry Date</label>
            <div id="card-expiry-element" class="input-value"></div>
        </div>

        <div class="col s6 card-element p-Input">
            <label for="card-cvc-element" class="Label">CVC</label>
            <div class="inpue" style="position: relative;">
              <div id="card-cvc-element" class="input-value"></div>
              <div class="p-CardCvcIcons Input"><div class="p-CardCvcIcons-group c-InputPadding"><svg class="p-CardCvcIcons-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--colorIconCardCvc)" role="presentation"><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M15.337 4A5.493 5.493 0 0013 8.5c0 1.33.472 2.55 1.257 3.5H4a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1v-.6a5.526 5.526 0 002-1.737V18a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h12.337zm6.707.293c.239.202.46.424.662.663a2.01 2.01 0 00-.662-.663z"></path><path opacity=".4" fill-rule="evenodd" clip-rule="evenodd" d="M13.6 6a5.477 5.477 0 00-.578 3H1V6h12.6z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 14a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-2.184-7.779h-.621l-1.516.77v.786l1.202-.628v3.63h.943V6.22h-.008zm1.807.629c.448 0 .762.251.762.613 0 .393-.37.668-.904.668h-.235v.668h.283c.565 0 .95.282.95.691 0 .393-.377.66-.911.66-.393 0-.786-.126-1.194-.37v.786c.44.189.88.291 1.312.291 1.029 0 1.736-.526 1.736-1.288 0-.535-.33-.967-.88-1.14.472-.157.778-.573.778-1.045 0-.738-.652-1.241-1.595-1.241a3.143 3.143 0 00-1.234.267v.77c.378-.212.763-.33 1.132-.33zm3.394 1.713c.574 0 .974.338.974.778 0 .463-.4.785-.974.785-.346 0-.707-.11-1.076-.337v.809c.385.173.778.26 1.163.26.204 0 .392-.032.573-.08a4.313 4.313 0 00.644-2.262l-.015-.33a1.807 1.807 0 00-.967-.252 3 3 0 00-.448.032V6.944h1.132a4.423 4.423 0 00-.362-.723h-1.587v2.475a3.9 3.9 0 01.943-.133z"></path></svg></div></div>
            </div>
        </div>

      </div>
      <div class="col s12 place-order-button-block">
        <button class="submit btn col s12" id="submit" @click="handleSubmit" style="margin: 17px 0;">
          <div class="spinner hidden" id="spinner"></div>
          <span id="button-text">Pay with Credit ${{ cart_Total }}</span>
        </button>
      </div>
      <div id="error-message">
        <!-- Display error message to your customers here -->
      </div>
    </form>
  </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

export default {
  props: {
    items: Array
  },
  data() {
    return {
    stripe: null,
    cardNumberElement: null,
    cardExpiryElement: null,
    cardCVCElement: null,
    stripeValidationError: null,
    amount: 25,
    email: '',
    lineItems: [],
    }
  },
  mounted() {
    loadScript("https://js.stripe.com/v3/")
    .then(() => {
      // Script is loaded, do something
      this.stripe = window.Stripe("pk_test_51LEwj8KwHhxzhn4R99v38nidybnhEP5g2HYthZJgBPTHcIqwhuSNXZr7LxSTNzJgyK6NwvlWs0KbfLCPbB061Kuo000vuoCdTn")
      this.createAndMountFormElements()
      var form = document.getElementById('payment-form');
      form.addEventListener('submit', async () => this.handleSubmit)
    })
    .catch(() => {
      // Failed to fetch script
    });
  },
  computed: {
    cart_Total() {
      return (this.$store.getters.cartTotal * 1.2).toFixed(2)
    },
    cartItems() {
      return this.$store.getters.cartItems
    },
  },
  methods: {
    setValidationError(event) {
      this.stripeValidationError = event.error ? event.error.message : "";
    },
    createAndMountFormElements() {
      var elements  = this.stripe.elements();
      this.cardNumberElement = elements.create("cardNumber");
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement=elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement=elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");

      this.cardNumberElement.onChange = this.setValidationError;
      this.cardExpiryElement.onChange = this.setValidationError;
      this.cardCvcElement.onChange = this.setValidationError;
    },
    handleSubmit(e) {
      this.setLoading(true);
      e.preventDefault();

      // Save all items to Line items to send it to Laravel
      this.cartItems.forEach(element => {
        this.lineItems.push({
          price: element.priceID,
          quantity: element.order
        })
      })

      // Create Payment Method
      this.stripe.createPaymentMethod({
        type: 'card',
        card: this.cardNumberElement,
        billing_details: {
          email: this.email
        },
      }).then(result => {
        if (result.error) {
          // Show error from server on creating payment method
          document.querySelector('#error-message').innerHTML = `<h5>${result.error}</h5>`
          this.$router.push("/error");
        } else {
          fetch(this.$store.getters.laravelWeb + "api/checkout2", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              payment_method_id: result.paymentMethod.id,
              email: this.email,
              amount: this.cart_Total,
              lineItems: this.lineItems,
              url: window.location.href
            })
          }).then(res => res.json()).then(result => {
              if (result.error) {
                // Show error from server on payment form
                document.querySelector('#error-message').innerHTML = `<h5>${result.error}</h5>`
                this.$router.push("/error");
              } else if (result.requires_action) {
                // Use Stripe.js to handle required card action
                this.stripe.handleCardAction(
                  result.payment_intent_client_secret
                ).then(cardActionResult => {
                  if (cardActionResult.error) {
                    // Show error in payment form
                    document.querySelector('#error-message').innerHTML = `<h5>${cardActionResult.error}</h5>`
                    this.$router.push("/error");
                  } else {
                    // The card action has been handled
                    // The PaymentIntent can be confirmed again on the server
                    fetch(this.$store.getters.laravelWeb + "api/checkout2", {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ payment_intent_id: cardActionResult.paymentIntent.id })
                    }).then(confirmResult => {
                      return confirmResult.json();
                    }).then(() => {
                      this.$router.push("/success");
                    })
                  }
              })
            } else {
              document.querySelector('#error-message').innerHTML = '<h5>Payment Done Successfully</h5>'
              // Remove All items from Local Storage
              this.$store.commit('removeAllProducts')
              // location.reload();
              this.$router.push("/success");
              // location.replace('/success');
            }
            this.setLoading(false);
          })
        }
      })
    },
    // Show a spinner on payment submission
    setLoading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
      } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
      }
    },
    closeCheckout(e) {
      e.preventDefault()
      document.querySelector('.form-container').classList.remove('display')
    },
  }
}
</script>

<style scoped>
@import '../style/stripe.css';
@import '../style/materialize.min.css';
/* Variables */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
}

form {
  background-color: #fff;
  text-align: left;
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
}

.hidden {
  display: none;
}

#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}
.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner:before,
.spinner:after {
  position: absolute;
  content: "";
}
.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}

.p-Input .Label {
  margin-bottom: 0.25rem;
  font-size: 0.93rem;
  font-weight: 400;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  color: #545454;
  display: block;
}

#email {
  padding: 0 0.75rem;
}

.p-Input input[type=text].email,
.p-Input .input-value {
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 5px;
  transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 3%), 0px 3px 6px rgb(0 0 0 / 2%);
  margin-bottom: 0.75rem;
  height: 1.4rem;
}
.p-Input input[type=text].email {
  width: calc(100% - 0.75rem);
  padding-right: 0;
}
.p-Input .input-value {
  height: 40px;
}

.p-Input input[type=text].email:focus,
.p-Input .StripeElement--focus {
  outline: 0;
  border-color: hsla(210, 96%, 45%, 50%);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02), 0 0 0 3px hsla(210, 96%, 45%, 25%), 0 1px 1px 0 rgba(0, 0, 0, 0.08);
}

::placeholder {
  color: #727272;
}

.right button {
  border-radius: 50%;
  padding: 5px 10px;
}

.right button:after {
  display: inline-block;
  content: "\00d7"; /* This will render the 'X' */
}

#error-message {
  text-align: center;
}
</style>