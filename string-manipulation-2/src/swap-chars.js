/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
//* **Can also be done by string replace method***/
// create storage for string swap
// create storage for first index character
// create storage for second index character
// get the length string go through each character till the length
// check if the current index is same as first index
//       if yes assign second storage character to to storage string variable
// if not check current index is same as second index
//       if yes assign first storage character to to storage string variable
// else assign current character to the string storage variable
// return string storage variable
