/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  if (queue.peek() === undefined) {
    return queue.peek();
  }
  let counter = 0;
  while (true) {
    if (counter === index) {
      break;
    } else {
      const current = queue.dequeue();
      queue.enqueue(current);
      counter++;
    }
  }
  return queue.dequeue();
}
