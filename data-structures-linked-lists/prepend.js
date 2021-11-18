/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newdata = new LinkedList(value);
  newdata.next = list;
  return newdata;

}
