/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  const secondValue = queue.dequeue();
  const maxValue = Math.max(firstValue, secondValue);
  queue.enqueue(maxValue);
  return Math.min(firstValue, secondValue);
}
