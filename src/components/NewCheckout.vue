<template>
  <!-- Display a payment form -->
  <form id="payment-form">
    <div id="payment-element">
      <!--Stripe.js injects the Payment Element-->
    </div>
    <button id="submit">
      <div class="spinner hidden" id="spinner"></div>
      <span id="button-text">Pay now</span>
    </button>
    <div id="payment-message" class="hidden"></div>
  </form>
</template>

<script>
export default {
  // mounted() {
  //   let recaptchaScript = document.createElement('script')
  //   recaptchaScript.setAttribute('src', 'https://js.stripe.com/v3/')
  //   document.head.appendChild(recaptchaScript)

  //   // This is your test publishable API key.
  //   const stripe = Stripe("pk_test_51LEwj8KwHhxzhn4R99v38nidybnhEP5g2HYthZJgBPTHcIqwhuSNXZr7LxSTNzJgyK6NwvlWs0KbfLCPbB061Kuo000vuoCdTn");

  //   // The items the customer wants to buy
  //   // const items = [{ id: "xl-tshirt" }];

  //   let elements;

  //   initialize();
  //   checkStatus();

  //   document
  //     .querySelector("#payment-form")
  //     .addEventListener("submit", handleSubmit);

  //   // Fetches a payment intent and captures the client secret
  //   async function initialize() {
  //     const { clientSecret } = await fetch("http://localhost:8080/checkout", {
  //       mode: 'no-cors',
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //       // headers: { "Content-Type": "text/plain" },
  //       // body: JSON.stringify({ items }),
  //     }).then((r) => r.json());

  //     elements = stripe.elements({ clientSecret });
  //     // elements = stripe.elements({
  //     //   clientSecret: 'pi_3LFEVyKwHhxzhn4R2EIp03X2_secret_Qx67q6hWr9Lp6RSrV801dHu09',
  //     // });

  //     const paymentElement = elements.create("payment");
  //     paymentElement.mount("#payment-element");
  //   }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     setLoading(true);

  //     const { error } = await stripe.confirmPayment({
  //       elements,
  //       confirmParams: {
  //         // Make sure to change this to your payment completion page
  //         return_url: document.location.host + "/success",
  //       },
  //     });

  //     // This point will only be reached if there is an immediate error when
  //     // confirming the payment. Otherwise, your customer will be redirected to
  //     // your `return_url`. For some payment methods like iDEAL, your customer will
  //     // be redirected to an intermediate site first to authorize the payment, then
  //     // redirected to the `return_url`.
  //     if (error.type === "card_error" || error.type === "validation_error") {
  //       showMessage(error.message);
  //     } else {
  //       showMessage("An unexpected error occurred.");
  //     }

  //     setLoading(false);
  //   }

  //   // Fetches the payment intent status after payment submission
  //   async function checkStatus() {
  //     const clientSecret = new URLSearchParams(window.location.search).get(
  //       "payment_intent_client_secret"
  //     );

  //     if (!clientSecret) {
  //       return;
  //     }

  //     const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         showMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         showMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         showMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         showMessage("Something went wrong.");
  //         break;
  //     }
  //   }

  //   // ------- UI helpers -------

  //   function showMessage(messageText) {
  //     const messageContainer = document.querySelector("#payment-message");

  //     messageContainer.classList.remove("hidden");
  //     messageContainer.textContent = messageText;

  //     setTimeout(function () {
  //       messageContainer.classList.add("hidden");
  //       messageText.textContent = "";
  //     }, 4000);
  //   }

  //   // Show a spinner on payment submission
  //   function setLoading(isLoading) {
  //     if (isLoading) {
  //       // Disable the button and show a spinner
  //       document.querySelector("#submit").disabled = true;
  //       document.querySelector("#spinner").classList.remove("hidden");
  //       document.querySelector("#button-text").classList.add("hidden");
  //     } else {
  //       document.querySelector("#submit").disabled = false;
  //       document.querySelector("#spinner").classList.add("hidden");
  //       document.querySelector("#button-text").classList.remove("hidden");
  //     }
  //   }
  // },
  setup() {
    // // This is your test publishable API key.
    // const stripe = Stripe("pk_test_51LEwj8KwHhxzhn4R99v38nidybnhEP5g2HYthZJgBPTHcIqwhuSNXZr7LxSTNzJgyK6NwvlWs0KbfLCPbB061Kuo000vuoCdTn");

    // // The items the customer wants to buy
    // // const items = [{ id: "xl-tshirt" }];

    // let elements;

    // initialize();
    // checkStatus();

    // document
    //   .querySelector("#payment-form")
    //   .addEventListener("submit", handleSubmit);

    // // Fetches a payment intent and captures the client secret
    // async function initialize() {
    //   const { clientSecret } = await fetch("http://localhost:8080/checkout", {
    //     mode: 'no-cors',
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //     // headers: { "Content-Type": "text/plain" },
    //     // body: JSON.stringify({ items }),
    //   }).then((r) => r.json());

    //   elements = stripe.elements({ clientSecret });
    //   // elements = stripe.elements({
    //   //   clientSecret: 'pi_3LFEVyKwHhxzhn4R2EIp03X2_secret_Qx67q6hWr9Lp6RSrV801dHu09',
    //   // });

    //   const paymentElement = elements.create("payment");
    //   paymentElement.mount("#payment-element");
    // }

    // async function handleSubmit(e) {
    //   e.preventDefault();
    //   setLoading(true);

    //   const { error } = await stripe.confirmPayment({
    //     elements,
    //     confirmParams: {
    //       // Make sure to change this to your payment completion page
    //       return_url: document.location.host + "/success",
    //     },
    //   });

    //   // This point will only be reached if there is an immediate error when
    //   // confirming the payment. Otherwise, your customer will be redirected to
    //   // your `return_url`. For some payment methods like iDEAL, your customer will
    //   // be redirected to an intermediate site first to authorize the payment, then
    //   // redirected to the `return_url`.
    //   if (error.type === "card_error" || error.type === "validation_error") {
    //     showMessage(error.message);
    //   } else {
    //     showMessage("An unexpected error occurred.");
    //   }

    //   setLoading(false);
    // }

    // // Fetches the payment intent status after payment submission
    // async function checkStatus() {
    //   const clientSecret = new URLSearchParams(window.location.search).get(
    //     "payment_intent_client_secret"
    //   );

    //   if (!clientSecret) {
    //     return;
    //   }

    //   const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    //   switch (paymentIntent.status) {
    //     case "succeeded":
    //       showMessage("Payment succeeded!");
    //       break;
    //     case "processing":
    //       showMessage("Your payment is processing.");
    //       break;
    //     case "requires_payment_method":
    //       showMessage("Your payment was not successful, please try again.");
    //       break;
    //     default:
    //       showMessage("Something went wrong.");
    //       break;
    //   }
    // }

    // // ------- UI helpers -------

    // function showMessage(messageText) {
    //   const messageContainer = document.querySelector("#payment-message");

    //   messageContainer.classList.remove("hidden");
    //   messageContainer.textContent = messageText;

    //   setTimeout(function () {
    //     messageContainer.classList.add("hidden");
    //     messageText.textContent = "";
    //   }, 4000);
    // }

    // // Show a spinner on payment submission
    // function setLoading(isLoading) {
    //   if (isLoading) {
    //     // Disable the button and show a spinner
    //     document.querySelector("#submit").disabled = true;
    //     document.querySelector("#spinner").classList.remove("hidden");
    //     document.querySelector("#button-text").classList.add("hidden");
    //   } else {
    //     document.querySelector("#submit").disabled = false;
    //     document.querySelector("#spinner").classList.add("hidden");
    //     document.querySelector("#button-text").classList.remove("hidden");
    //   }
    // }
    },
}
</script>

<style>

</style>