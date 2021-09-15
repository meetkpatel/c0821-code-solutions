/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i in array) {
    if (Array.isArray(array[i]) === true) {
      for (var j in array[i]) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create an empty storage list
// go through each element of the list provide in the input
// check if the current element of list isarray
//      if yes go throw each element of current object
//      add current element to the created storage list
// else add current element to the created storage list
// return created storage list
