/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  var startIndex = 0;
  if (string.length - length >= 0) {
    startIndex = string.length - length;
  }
  for (var i = startIndex; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
// create storage for string
// create start index set it to 0
// check if string length subtract uder define length is more the 0
//      if yes subtract user defined length from string length and assisgn that result to startIndex
//  go through each character from the startIndex
// add current character to the storage string variable
// return the string storage variable
