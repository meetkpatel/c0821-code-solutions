/* exported intersection */
function intersection(first, second) {
  var intArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intArray.push(first[i]);
    }
  }
  return intArray;
}
// create storage for a list array
// go through each element in the first array
// check the index of current element in second array and check if !== -1
//      if yes add current element to the new created storage list
// return created list storage
