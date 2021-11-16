/* exported maxValue */

function maxValue(stack) {
  let maxValue = -Infinity;
  const newArr = [];
  while (!(stack.peek() === undefined)) {
    const currentValue = stack.pop();
    maxValue = (maxValue < currentValue) ? currentValue : maxValue;
    newArr.push(currentValue);
  }
  for (let i = newArr.length - 1; i >= 0; i--) {
    stack.push(newArr[i]);
  }
  return maxValue;
}
