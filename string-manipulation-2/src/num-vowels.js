/* exported numVowels */
function numVowels(string) {
  var vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var vovelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowelList.length; j++) {
      if (string[i] === vowelList[j]) {
        vovelCounter++;
      }
    }
  }
  return vovelCounter;
}
//* ***can also be done using array includes or indexOf method****//
// create storage for vovel character
// create counter for vovel count
// get the length of string go through each character till the length
// get the length of vovel list go through each character till the length
// check if current charater with each charater in vovel list and match it
//      if match found +1 to the counterVovel
// retun vovel counter
