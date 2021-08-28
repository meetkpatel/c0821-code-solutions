/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var tempArray = [];
  var counter = 0;
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    counter++;
    tempArray.push(array[i]);
    if (counter === size) {
      newArray.push(tempArray);
      counter = 0;
      tempArray = [];
    }
  }
  if (counter !== 0) {
    newArray.push(tempArray);
  }
  return newArray;
}

// create a storage list for output
// create a storage list for temporary element
// create counter
// check if user defined list is empty or not
//      if empty retun storage list
// if not go through each element of the user defined list
// increment counter
// add current element into the temporary storage list
// check if the counter is same as user defined size
//      if yes add temporay list to the output list
//      set counter to 0
//      empty the temporary list
// check if counter is 0
//      if yes add temporay list to the output list
// return storage array list
