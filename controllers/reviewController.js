const Review = require('../models/reviewModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');
const factory = require('./handlerFactory');

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
