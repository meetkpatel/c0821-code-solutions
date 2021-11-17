/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  } else if (firstValue <= queue.peek()) {
    return firstValue;
  }
  while (true) {
    if (firstValue <= queue.peek()) {
      return firstValue;
    } else {
      queue.enqueue(firstValue);
      firstValue = queue.dequeue();
    }
  }
}
