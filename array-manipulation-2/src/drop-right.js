/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// create a storage for list
// check if user defined list is empty or not
//      if empty retun storage list
// if not set array length to (subtract user defined count from the user defined array length) and go througt each element till that index
// add current element to the storage list
// return storage array list
