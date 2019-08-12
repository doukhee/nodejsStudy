/**
 * [1, 0] [4, 5] [7, 6] mapping
 */
const TestingArray = [1, 5, 7];
/** new array */
/** Array.map(item, index, array) */
const result = TestingArray.map(element=>element-1);

console.log(result);

console.log("get testing array :: ", TestingArray);