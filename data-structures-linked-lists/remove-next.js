/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const newList = list.next.next;
  list.next = newList;
}
