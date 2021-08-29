/* exported defaults */
function defaults(target, source) {
  var tempSource = source;
  for (var sourceKey in source) {
    for (var targetKey in target) {
      if (sourceKey === targetKey) {
        delete tempSource[sourceKey];
      }
    }
  }
  for (var tempkey in tempSource) {
    target[tempkey] = tempSource[tempkey];
  }
}
