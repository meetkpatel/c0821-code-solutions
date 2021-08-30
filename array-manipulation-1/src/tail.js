/* exported tail */
function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
// create storage for empty array
// get length of list and go throw each list from index 1
// add current list element to storage list element
// return storage list
