/* exported capitalize */

function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
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
