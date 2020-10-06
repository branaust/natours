const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures.js');

// exports.getAll = (Model) =>
//   catchAsync(async (req, res, next) => {
//     const features = new APIFeatures(Model.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     const tours = await features.query;

//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours,
//       },
//     });
//   });

//////////////////////////////////////////

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
