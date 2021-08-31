/* exported compact */
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
// create storage list
// get array length and go through each lidt of array
// check truely value
//    if true add that element to the storage list
// return storage list array
