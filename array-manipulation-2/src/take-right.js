/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// create a storage for list
// check if user defined list is empty or not
//      if empty retun storage list
// if not set index to (subtract user defined count from user defined list) and go througt each element from that index
// add current element to the storage list
// return storage array list
