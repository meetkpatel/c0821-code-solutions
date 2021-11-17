/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  const newArr = [];
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (!(queue.peek() === undefined)) {
    newArr.push(queue.dequeue());
  }
  if (newArr[index] === undefined) {
    return newArr[0];
  }
  for (let i = index + 1; i < newArr.length; i++) {
    queue.enqueue(newArr[i]);
  }
  for (let i = 0; i < index; i++) {
    queue.enqueue(newArr[i]);
  }
  return newArr[index];
}
