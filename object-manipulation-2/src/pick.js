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
