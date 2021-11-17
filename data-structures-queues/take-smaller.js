/* exported takeSmaller */

function takeSmaller(queue) {
  const newArr = [];
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (!(queue.peek() === undefined)) {
    newArr.push(queue.dequeue());
  }
  if ((newArr.length) === 1) {
    return newArr[0];
  }
  for (let i = 2; i < newArr.length; i++) {
    queue.enqueue(newArr[i]);
  }
  queue.enqueue(Math.max(newArr[0], newArr[1]));
  return Math.min(newArr[0], newArr[1]);
}
