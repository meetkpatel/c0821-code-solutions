/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var j = 0; j < keys.length; j++) {
    if (typeof source[keys[j]] !== 'undefined') {
      newObj[keys[j]] = source[keys[j]];
    }
  }
  return newObj;
}
// create an empty object
// go through each object
// go through each keys
// check if current element of keys and source are same
//      if yes check if type of current element is not undefined
//            if yes add current source propert and value to the new object
// return new object
