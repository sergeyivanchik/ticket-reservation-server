const router = require('express').Router();
const stripeKey = require('../configs/payment').stripeKey
const stripe = require("stripe")(stripeKey);


router.post("/", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.cost * 100,
      currency: "usd",
      description: "Charge for tickets",
      source: req.body.token.id
    });
    res.send({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
