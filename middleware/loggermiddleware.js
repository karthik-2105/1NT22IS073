const logEvent = require('../logger/index');

const loggerMiddleware = async (req, res, next) => {
  const logData = {
    stack: 'backend',
    level: 'info',
    package: 'auth',
    message: `${req.method} ${req.originalUrl}`,
    timestamp: new Date().toISOString()
  };

  await logEvent(logData); // logs to external API

  next(); // proceed to the actual route
};

module.exports = loggerMiddleware;
