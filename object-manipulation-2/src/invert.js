/* exported invert */
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
// create new empty object
// go through each object of source
// add current value and property to new object
// retuen new object
