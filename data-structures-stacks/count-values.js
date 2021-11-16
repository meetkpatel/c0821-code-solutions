/* exported countValues */

function countValues(stack) {
  let len = 0;
  const newArr = [];
  while (!(stack.peek() === undefined)) {
    newArr.push(stack.pop());
    len++;
  }
  for (let i = newArr.length - 1; i >= 0; i--) {
    stack.push(newArr[i]);
  }
  return len;
}
