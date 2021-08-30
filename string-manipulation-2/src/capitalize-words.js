/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[i].toUpperCase();
    } else if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

// create storage for string
// get the length go through each character till the length
// check if its first character
//      if yes convert current character to into upper case and store it to the storage string variable
// if not check if its previous charater was space' '
//      if yes convert current character to into upper case and store it to the storage string variable
// if not change convert current character to into lower case and store it to the storage string variable
// return storage string variable
