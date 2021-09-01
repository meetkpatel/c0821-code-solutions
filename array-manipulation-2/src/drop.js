/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// create a storage for list
// check if user defined list is empty or not
//      if empty retun storage list
// if not get user define count and go throw each element of the list from that count
// add current element to the storage list
// return storage array list
