const Review = require('../models/reviewModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');
const factory = require('./handlerFactory');

//////////////////////////////////////////
// ROUTE HANDLERS - REVIEWS
//////////////////////////////////////////

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: { reviews },
  });
});

//////////////////////////////////////////

exports.createReview = catchAsync(async (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'Review Created',
    data: { newReview },
  });
});

//////////////////////////////////////////

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }
});

//////////////////////////////////////////

exports.deleteReview = factory.deleteOne(Review);
