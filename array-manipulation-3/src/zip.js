/* exported zip */
function zip(first, second) {
  var newArr = [];
  var tempArr = [];
  var iteration = Math.min(first.length, second.length);
  for (var i = 0; i < iteration; i++) {
    tempArr.push(first[i]);
    tempArr.push(second[i]);
    newArr.push(tempArr);
    tempArr = [];
  }
  return newArr;
}

// create an empty list
// create an temporary list
// find minimum length of  first and second list and add it to the index variable
// go through each list of the first array till the index of index variable storage
// get element of first list at current position and add it to tempory list
// get element of second list at current position and add it to tempory list
// add temp array to newarray list
// empty tempArry
// return newArr list
