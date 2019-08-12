/**
 * logger.js파일을 보면 생성자 형식으로 되어 있어서 
 * new를 사용하지 않을 시에 호출에 대해 보호가 가능하다. 
 */
const Logger = require('./logger');
/**
 * Singleton pattern factory
 */
const Factory = require('./guarding-factory');
/**
 * make new logger name input DB
 */
const dbLogger = new Logger('DB');
/**
 * Logger function info call
 */
dbLogger.info('This is an informational message');
/**
 * make new logger name input ACCESS
 */
const accessLogger = new Logger('ACCESS');
/**
 * Logger function verbose call
 */
accessLogger.verbose('This is a verbose message');
/**
 * Checking Factory DB
 */
const TestDB = Factory('DB');
/**
 * Checking Factory TESTER
 */
const TestTester = Factory('TESTER');

TestDB.info('TESTING....');
TestTester.verbose('TESTING...');

