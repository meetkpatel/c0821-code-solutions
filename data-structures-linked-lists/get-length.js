/* exported getLength */

function getLength(list) {

  let currentData = list;
  let counter = 0;
  while (currentData) {
    counter++;
    currentData = currentData.next;
  }
  return counter;
}
