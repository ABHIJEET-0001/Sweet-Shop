// ==========================================
// 🛍️ routes/productRoutes.js
// ==========================================
const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const { productValidation, validate } = require('../middlewares/validator');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProduct);
router.post(
  '/',
  protect,
  adminOnly,
  upload.array('images', 5),
  productValidation,
  validate,
  createProduct
);
router.put(
  '/:id',
  protect,
  adminOnly,
  upload.array('images', 5),
  updateProduct
);
router.delete('/:id', protect, adminOnly, deleteProduct);

module.exports = router;