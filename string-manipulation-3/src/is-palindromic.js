/* exported isPalindromic */
function isPalindromic(string) {
  var stringLen = string.length - 1;
  var revStr = '';
  var newStr = '';
  var strCount = 0;
  while (stringLen >= 0) {
    if (string[stringLen] !== ' ') {
      revStr += string[stringLen];
    }
    if (string[strCount] !== ' ') {
      newStr += string[strCount];
    }
    stringLen--;
    strCount++;
  }
  if (revStr === newStr) {
    return true;
  }
  return false;
}

// get last index of list element and store it to variable
// create storage for reverse string
// create storage for string without space
// create a counter
// go through each character from back of string
// check if current character is not space
//      if yes add current charcter to reverse storage variable
// start from starting of string and checl if its not space
//      if yes add current character to the new string storage
// decrement string length
// increment string counter
// check if reverse string is same as new string
//      if yes return true
// return false
