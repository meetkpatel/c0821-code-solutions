/* exported isUpperCased */
function isUpperCased(word) {
  var capWord = word.toUpperCase();
  if (capWord === word) {
    return true;
  }
  return false;
}
// convert word to uppercase
// check if word and converted word are same
//      if yes retuen true
// return false
