/* exported reverseWord */
function reverseWord(word) {
  var revWord = '';
  var wordLength = word.length - 1;
  while (wordLength >= 0) {
    revWord += word[wordLength];
    wordLength--;
  }
  return revWord;
}

// create storage for reverse word
// create storage for string length
// go throw each charater from the end
// add character to the reverse word storage
// -1 from the word length
// return reverse word
