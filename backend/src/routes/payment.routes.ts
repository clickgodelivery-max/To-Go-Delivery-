'use strict';

const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your actual Stripe secret key

// Create a payment
router.post('/pay', async (req, res) => {
    const { amount, currency, source } = req.body;
    try {
        const payment = await stripe.charges.create({
            amount,
            currency,
            source,
        });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Handle refunds
router.post('/refund', async (req, res) => {
    const { chargeId } = req.body;
    try {
        const refund = await stripe.refunds.create({
            charge: chargeId,
        });
        res.status(200).json(refund);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;