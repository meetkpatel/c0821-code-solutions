/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) <= 90 && word[i].charCodeAt(0) >= 65) {
      return false;
    }
  }
  return true;
}
// look at each character
// find the ascii of current character
// check if ascii calue of charater is les then or equal to 97 or more than equal to 65
//      if yes retuen false
// if checking all ascii of character does noot have value more then 97 return true
