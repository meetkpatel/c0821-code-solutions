/* exported take2nd */

function take2nd(queue) {
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
  queue.enqueue(newArr[0]);
  return newArr[1];
}
