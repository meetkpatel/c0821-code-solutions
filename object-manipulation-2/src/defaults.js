/* exported defaults */
function defaults(target, source) {
  var tempCount = 0;
  for (var i in source) {
    for (var j in target) {
      if (i === j) {
        tempCount++;
      }
    }
    if (tempCount === 0) {
      target[i] = source[i];
    }
    tempCount = 0;
  }
}
// create temporary counter
// go through each object in the source
// go through each element in the target
// check if current element of source and key are same
//      if yes increment counter
// check if the counter is 0
//      if yes add current source object property and value to the target object
// set temp to 0
