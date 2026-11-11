const _ = require("lodash");
const assert = require("node:assert/strict");

// Test 1: Lodash should split an array into chunks
const result = _.chunk([1, 2, 3, 4], 2);

assert.deepEqual(result, [[1, 2], [3, 4]]);

// Test 2: Lodash should return an empty array
const emptyResult = _.chunk([], 2);

assert.deepEqual(emptyResult, []);

console.log("All tests passed!");
