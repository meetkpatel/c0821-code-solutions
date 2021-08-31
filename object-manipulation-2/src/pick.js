/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i in source) {
    for (var j = 0; j < keys.length; j++) {
      if (keys[j] === i) {
        if (typeof source[i] !== 'undefined') {
          newObj[i] = source[i];
        }
      }
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
