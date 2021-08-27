/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 97) {
      return false;
    }
  }
  return true;
}

// look at each character
// find the ascii of current character
// check if ascii calue of charater is more then or equal to 97
//      if yes retuen false
// if checking all ascii of character does noot have value more then 97 return true
