/* exported initial */
function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
// create list storage
// go throw each list in array except last one by doing -1 to index
// add current list to an storage array
// retuen storage array
