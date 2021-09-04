/* exported defaults */
function defaults(target, source) {
  for (var i in source) {
    if (typeof target[i] === 'undefined') {
      target[i] = source[i];
    }
  }
}
// go through each object in the source
// check if current element of source in target is undefined
// if yes add current element of source in the target
