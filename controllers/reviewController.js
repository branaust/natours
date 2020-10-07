const Review = require('../models/reviewModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');
const factory = require('./handlerFactory');

//////////////////////////////////////////
// REVIEW MIDDLEWARE
//////////////////////////////////////////

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

//////////////////////////////////////////
// ROUTE HANDLERS - REVIEWS
//////////////////////////////////////////

exports.getAllReviews = factory.getAll(Review);
//////////////////////////////////////////
exports.createReview = factory.createOne(Review);
//////////////////////////////////////////
exports.updateReview = factory.updateOne(Review);
//////////////////////////////////////////
exports.deleteReview = factory.deleteOne(Review);
//////////////////////////////////////////
