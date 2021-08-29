/* exported omit */
function omit(source, keys) {
  var newObj = source;
  for (var i in keys) {
    for (var j in newObj) {
      if (keys[i] === j) {
        delete newObj[j];
      }
    }
  }
  return newObj;
}
