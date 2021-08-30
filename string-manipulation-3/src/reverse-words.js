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
