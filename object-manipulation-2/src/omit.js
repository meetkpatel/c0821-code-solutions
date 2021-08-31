/* exported omit */
function omit(source, keys) {
  var newObj = {};
  var tempCount = 0;
  for (var i in source) {
    for (var j in keys) {
      if (i === keys[j]) {
        tempCount++;
      }
    }
    if (tempCount === 0) {
      newObj[i] = source[i];
    }
    tempCount = 0;
  }
  return newObj;
}

// create empty object
// create temporary counter
// go through each object in the source
// go through each element in the keys
// check if current element of source and key are same
//      if yes increment counter
// check if the counter is 0
//      if yes add current source object property and value to the new empty object
// set temp to 0
// retuen new object
