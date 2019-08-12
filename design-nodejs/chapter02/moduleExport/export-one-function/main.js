const logger = require('./logger');

/**
 * 최소한의 노출 패턴
 */
logger('This is an informational message');
/**
 * 단일 진입점의 명확성 제공 패턴
 * 한가지만 책임 지는 원칙
 */
logger.verbose('This si a verbose message');