const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require('./multiply.js');
const divide = require('./divide.js');
if (process.argv[3] === 'plus') {
  console.log('Result', add.add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'minus') {
  console.log('Result', subtract.subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'times') {
  console.log('Result', multiply.multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'over') {
  console.log('Result', divide.divide(process.argv[2], process.argv[4]));
} else {
  console.log('Not valid operations');
}
