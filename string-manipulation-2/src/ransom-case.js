/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

// create storage for string
// get the length go through each character till the length
// check if charater index is module of 2 is not zero
//      if yes change it to capital case and add it to the string storage variable
// else change it to lower case string storage variable
// return string storage variable
