import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { StripeForm } from "./StripeForm";

const SANDBOX = false

const PUBLIC_KEY_TEST = "pk_test_51IkEUZFIhuPIgcmzz1TqaJ3BF72sBkyTUi9XvsJa7yiwARjWnKdJZcFxxbNChIRjnqdV22NSvKBC9rq8Cx1mbwIQ00kTfcKVIR";
const PUBLIC_KEY_LIVE = "pk_live_51IkEUZFIhuPIgcmz7DJhYnEnjdlLZ42EbFLH4ztzYWgV44ZeoWl8drHmkkytTM4apfk0KZtNQrqYgbPRtXIWFCiz00eFYDpRId";

const PUBLIC_KEY = SANDBOX ? PUBLIC_KEY_TEST : PUBLIC_KEY_LIVE

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <StripeForm />
    </Elements>
  );
};

export default Stripe;