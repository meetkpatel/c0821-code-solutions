/* exported getTail */

function getTail(list) {
  let currentData = list;
  if (list.next === null) {
    return list.data;
  }
  while (currentData) {
    if (currentData.next) {
      currentData = currentData.next;
    } else {
      return currentData.data;
    }
  }
}
