// routes/auth.js
const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  getuser,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/users", getuser);


module.exports = router;
