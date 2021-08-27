/* exported capitalize */

function capitalize(word) {
  var wordResult = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      if (word[i].charCodeAt(0) >= 97) {
        var capAsci = word[i].charCodeAt(0) - 32;
        wordResult += String.fromCharCode(capAsci);
      } else {
        wordResult += word[i];
      }
    } else {
      if (word[i].charCodeAt(0) <= 90) {
        var smallAsci = word[i].charCodeAt(0) + 32;
        wordResult += String.fromCharCode(smallAsci);
      } else {
        wordResult += word[i];
      }
    }
  }
  return wordResult;
}

// create ouput storage
// go throw each character
// check if its start of index
//      if yes check ascii value of first character is more than 97
//      if yes find the current character ascii value and -32 and store it to storage variable
//      if ascii is less the 97 store it directly to storage variable
// else do this
//      check if ascii value of first character is less than 90
//      if yes find the current character ascii value and +32 and store it to storage variable
//      if ascii is more the 97 store it directly to storage variable
// return the storage output
