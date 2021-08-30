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
