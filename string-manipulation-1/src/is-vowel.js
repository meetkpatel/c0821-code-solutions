/* exported isVowel */
function isVowel(char) {
  var vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < char.length; i++) {
    for (var j = 0; j < vowelList.length; j++) {
      if (char[i] === vowelList[j]) {
        return true;
      }
    }
  }
  return false;
}
// create list of vowel in uppercase and lowercase
// go throw each char of string
// go throw each item in list
// check if current character is in list
//      if yes return true
// if no return flase
