const express = require('express');
const {
    payment,
    history,
    historyByType
} = require('../controllers/TransactionController');

const router = express.Router();

router.post('/:id/payment', async (req, res) => {
    await payment(req, res);
});

router.get('/:id/history', async (req, res) => {
    await history(req, res);
});

router.get('/:id/history/type', async (req, res) => {
    await historyByType(req, res);
});


module.exports = router;