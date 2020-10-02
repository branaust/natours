const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router
  .route('/:id')
  .get(authController.protect, reviewController.getSingleReview)
  .patch(reviewController.updateReview)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    reviewController.deleteReview
  );

module.exports = router;
