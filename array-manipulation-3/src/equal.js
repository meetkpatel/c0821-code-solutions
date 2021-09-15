/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i in first) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
// find first array and second array length and check if its not equal
//      if yes return false
// go throw each list of element of the list
// check if the first element of first  and  second list are not same
//      if yes return false
// return true
