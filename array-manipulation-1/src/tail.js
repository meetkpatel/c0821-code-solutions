/* exported tail */
function tail(array) {
  var tailArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
// create storage for empty array
// get length of list and go throw each list
// check current index is more then 0
//    if yes add current list element to storage list element
// return storage list
