/* exported reverseWords */
function reverseWords(string) {
  var revStr = '';
  var tempStr = '';
  var tempStrLen = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      tempStr += string[i];
    } else {
      if (revStr.length !== 0) {
        revStr += ' ';
      }
      tempStrLen = tempStr.length - 1;
      while (tempStrLen >= 0) {
        revStr += tempStr[tempStrLen];
        tempStrLen--;
      }
      tempStr = '';
    }
  }
  revStr += ' ';
  tempStrLen = tempStr.length - 1;
  while (tempStrLen >= 0) {
    revStr += tempStr[tempStrLen];
    tempStrLen--;
  }
  return revStr;
}
// create string storage for reverse string
// create string storage for temporary string
// create a counter for string len
// go through each character of string
// check if current charcter is no space
//      if yes add current character to the temp string storage
// else
// check if reverse string storage length is not 0
//      if yes add space to the reverse string storage
// get the length of the temp string storage
// go through each character of temp string storage from the back
// add current character of temp string storage to the reverse string storage
// decrement the temp string storage length
// empty the temp string storage
// add space to the reverse string storage
// get the length of the temp string storage
// go through each character of temp string storage from the back
// add current character of temp string storage to the reverse string storage
// decrement the temp string storage length
// return reverse string storage
