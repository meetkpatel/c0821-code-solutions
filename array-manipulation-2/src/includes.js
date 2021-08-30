/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// check if user defined list is empty or not
//      if empty retun false
// if not go through each element from user defined list
// check if current element is same as value provided by user
//      if yes return true
// return false
