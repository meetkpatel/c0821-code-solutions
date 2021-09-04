/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (Boolean(string[i]) === false) {
      break;
    }
    newString += string[i];
  }
  return newString;
}
// create storage for string
// get the length define by user go through each character till the length
// check if the current charater is undefine or not
//       if yes break the loop
// if no add current charater to the string storage variable
// return the string storage variable
