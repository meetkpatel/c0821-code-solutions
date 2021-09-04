/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = '';
  newString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

// create storage for string
// add and convert first character of string to upperCase and store it to storage
// get the length go through each character till the length
// check if its previous charater was space' '
//      if yes convert current character to into upper case and store it to the storage string variable
// if not change convert current character to into lower case and store it to the storage string variable
// return storage string variable
