/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var arrOne = [];
  var arrTwo = [];
  for (var arrOneKey in firstString) {
    if (firstString[arrOneKey] !== ' ') {
      arrOne.push(firstString[arrOneKey]);
    }
  }

  for (var arrTwoKey in secondString) {
    if (secondString[arrTwoKey] !== ' ') {
      arrTwo.push(secondString[arrTwoKey]);
    }
  }

  for (var arrOneCheck in arrOne) {
    for (var arrTwoCheck in arrTwo) {
      if (arrOne[arrOneCheck] === arrTwo[arrTwoCheck]) {
        arrOne[arrOneCheck] = '*';
        arrTwo[arrTwoCheck] = '*';
        break;
      }
    }
  }
  for (var arrOneCheckLast in arrOne) {
    for (var arrTwoCheckLast in arrTwo) {
      if (arrOne[arrOneCheckLast] !== arrTwo[arrTwoCheckLast]) {
        return false;
      }
    }
  }
  return true;
}
// create an empty storage list for string one
// create an empty storage list for string two
// go through each character of string one
// check if current character is not space
//      if yes add current character to storage list one
// go through each character of string two
// check if current character is not space
//      if yes add current character to storage list two
// go through each element of storage list one
// go through each element of storage list two
// ckeck if both element of storage list one and two are same
//      if yes change current element of storage list one to '*'
//      if yes change current element of storage list two to '*'
//      break itreation of storage list two
// go through each element of storage list one
// go through each element of storage list two
// ckeck if both element of storage list one and two are not same
//      if yes return false
// return true
