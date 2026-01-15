// ==========================================
// 📦 routes/orderRoutes.js
// ==========================================
const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { orderValidation, validate } = require('../middlewares/validator');
const {
  createOrder,
  getUserOrders,
  getOrder,
  cancelOrder
} = require('../controllers/orderController');

router.post('/', protect, orderValidation, validate, createOrder);
router.get('/', protect, getUserOrders);
router.get('/:id', protect, getOrder);
router.put('/:id/cancel', protect, cancelOrder);

module.exports = router;
