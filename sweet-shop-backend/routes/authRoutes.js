// ==========================================
// 🔐 routes/authRoutes.js
// ==========================================
console.log("AUTH ROUTES LOADED");
const express = require("express");
const router = express.Router();

// TEST route
router.get("/test", (req, res) => {
  res.json({ ok: true, message: "Auth route working" });
});

const { protect } = require("../middlewares/auth");

const {
  registerValidation,
  loginValidation,
  validate
} = require("../middlewares/validator");

const {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword
} = require("../controllers/authController");

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/change-password", protect, changePassword);


module.exports = router;


