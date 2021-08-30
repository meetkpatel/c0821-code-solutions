/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newString += word[i].toUpperCase();
    } else {
      newString += word[i].toLowerCase();
    }
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}
// create storage for string
// get the length go through each character till the length
// check if charater is a first charater
//      if yes change it to capital case and add it to the string storage variable
// else change it to lower case string storage variable
// check if string is 'Javascript'
//      if yes change storage string to 'JavaScript'
// return string storage variable
