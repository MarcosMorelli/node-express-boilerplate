const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { healthcheckService } = require('../services');

const healthcheck = catchAsync(async (_req, res) => {
  const isDbHealthy = await healthcheckService.checkConnection();
  if (!isDbHealthy) {
    throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, 'DB unavailabe');
  }

  const body = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  res.status(httpStatus.OK).send(body);
});

module.exports = {
  healthcheck,
};
