/* exported unique */
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create a storage for list
// loop through each array
// find the index current element in new created list and check if its -1
//      if yes add the current element to the new storge
// return new array list
