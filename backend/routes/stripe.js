const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.items,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ url: session.url });
});

module.exports = router;
