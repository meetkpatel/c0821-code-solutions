/* exported difference */
function difference(first, second) {
  var diff = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diff.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      diff.push(second[j]);
    }
  }
  return diff;
}

// create a storage for list
// go through each element of first array
// check the index of current character in second array and check if its -1
//      if yes add the current character to the new created storage list
// go through each element of second array
// check the index of current character in first array and check if its -1
//      if yes add the current character to the new created storage list
// return the created list
