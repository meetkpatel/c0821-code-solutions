/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const lastData = new LinkedList(value);
  if (list.next === null) {
    return list.data;
  }
  while (list.next !== null) {
    list = list.next;
  }
  list.next = lastData;

}
