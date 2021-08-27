/* exported getWords */
function getWords(string) {
  var wordList = [];
  var tempWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      tempWord += string[i];
    } else {
      if (tempWord !== '') {
        wordList.push(tempWord);
      }
      tempWord = '';
    }
  }
  if (tempWord !== '') {
    wordList.push(tempWord);
  }
  return wordList;
}

// create storage for wordlist
// create storage for current word
// go throw each charater of string
// check for no-space in each character
//      if yes add current character to word storage
// else
//    check if curret word storage is not empty
//            if not empty add word storage to list and empty
//      empty the word storage
// at the end check if curret word storage is not empty
//    if not empty add word storage to list and empty
