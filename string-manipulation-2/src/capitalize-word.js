/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  newString += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString += word[i].toLowerCase();
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}
// create storage for string
// add and convert first character tp uppercase and store ot to the storage
// get the length go through each character till the length
// change it to lower case string storage variable
// check if string is 'Javascript'
//      if yes change storage string to 'JavaScript'
// return string storage variable
