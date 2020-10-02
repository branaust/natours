const Review = require('../models/reviewModel.js');
const APIFeatures = require('../utils/apiFeatures.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

//////////////////////////////////////////
// ROUTE HANDLERS - REVIEWS
//////////////////////////////////////////

exports.getAllReviews = catchAsync(async (req, res, next) => {
  //   const features = new APIFeatures(Review.find(), req.query)
  //     .filter()
  //     .sort()
  //     .paginate();
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: { reviews },
  });
});

//////////////////////////////////////////

exports.getSingleReview = catchAsync(async (req, res, next) => {
  const review = await await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { review },
  });
});

//////////////////////////////////////////

exports.createReview = catchAsync(async (req, res, next) => {
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

exports.deleteReview = catchAsync(async (req, res, next) => {
  const review = Review.findByIdAndDelete(req.params.id);

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }

  res.status(204).json({
    status: 'Review successfully deleted',
    data: null,
  });
});
