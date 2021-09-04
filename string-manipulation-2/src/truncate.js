/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (Boolean(string[i]) === false) {
      break;
    }
    newString += string[i];
  }
  newString += '...';
  return newString;
}

// create storage for string
// get the length go through each character till the length
// check if the current charater is undefine or not
//       if yes break the loop
// of no add current charater to the string storage variable
// after loop add '...' to the string storage variable
// return the string storage variable
