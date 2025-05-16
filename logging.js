const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs.log'})
  ]
});
logger.warn('warning')
logger.info('Info log');
logger.error('Error log');