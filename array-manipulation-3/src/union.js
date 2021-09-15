/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
//  create storage list
//  go through each element of the first array
//  add current element of first array to the created list
//  go through each element of the second array
//  check if indec current element of second array in the first array and check if its === -1
//        if yes add current element of second array to the created list
// return created list
