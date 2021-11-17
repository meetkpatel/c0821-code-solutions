/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  const newArr = [];
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (!(queue.peek() === undefined)) {
    newArr.push(queue.dequeue());
  }
  if (newArr.length === 1) {
    return newArr[0];
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] <= newArr[i + 1]) {
      for (let j = i + 1; j < newArr.length; j++) {
        queue.enqueue(newArr[j]);
      }
      for (let k = 0; k < i; k++) {
        queue.enqueue(newArr[k]);
      }
      return newArr[i];
    }
  }
}
