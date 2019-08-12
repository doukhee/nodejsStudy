/**
 * instance Logger 
 */
const logger = require('./logger');

logger.log('this is informational message');

/**
 * new Logger not instance logger 
 */
const customLogger = new logger.newLogger('CUSTOM');

customLogger.log('this is an informational message');