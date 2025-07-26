const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware'); // Also comment this out for now

// Register a new user
router.post('/register', userController.registerUser);

// Login an existing user
router.post('/login', userController.loginUser);

// Update user profile (protected route)
// router.put('/:id', authMiddleware, userController.updateUserProfile); // <-- COMMENT THIS LINE OUT

module.exports = router;