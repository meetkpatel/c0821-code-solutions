/* exported filterOutStrings */
function filterOutStrings(values) {
  var onlyNumbersArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      onlyNumbersArray.push(values[i]);
    }
  }
  return onlyNumbersArray;
}
