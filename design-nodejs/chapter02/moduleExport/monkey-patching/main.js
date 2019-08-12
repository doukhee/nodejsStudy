/**
 * module 및 global scope 수정 하는 모듈 
 * 포함 하기
 */
require('./patcher');
/**
 * 수정을 위한 모듈 불러오기 
 */
const logger = require('./logger');

/**
 * 수정이 되었는지 확인하는 것 
 */
logger.customMessage();