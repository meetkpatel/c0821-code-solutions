/* exported take */
function take(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// create a storage for list
// check if user defined list is empty or not
//      if empty retun storage list
// if not get user define count and go through each element in the list till user defined count
// add current element to the storage list
// return storage array list
