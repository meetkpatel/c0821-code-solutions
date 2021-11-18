/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    return list.data;
  }
  while (list) {
    if (list.next) {
      list = list.next;
    } else {
      return list.data;
    }
  }
}
