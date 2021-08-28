/* exported reverse */
function reverse(array) {
  var reverseArray = [];
  var arrayIndex = array.length - 1;
  while (arrayIndex >= 0) {
    reverseArray.push(array[arrayIndex]);
    arrayIndex--;
  }
  return reverseArray;
}
// create storage for reverse reverse list
// get last index of array and store it to variable
// go through each list from the end
// add current list element to reverse storage list
