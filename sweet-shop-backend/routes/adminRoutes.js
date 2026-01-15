// ==========================================
// 👨‍💼 routes/adminRoutes.js
// ==========================================
const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middlewares/auth');
const {
  getDashboardStats,
  getAllOrders,
  updateOrderStatus,
  getAllUsers,
  toggleUserStatus
} = require('../controllers/adminController');

router.get('/dashboard', protect, adminOnly, getDashboardStats);
router.get('/orders', protect, adminOnly, getAllOrders);
router.put('/orders/:id/status', protect, adminOnly, updateOrderStatus);
router.get('/users', protect, adminOnly, getAllUsers);
router.put('/users/:id/toggle-status', protect, adminOnly, toggleUserStatus);

module.exports = router;