/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

// create storage for array list
// go throw eact object
// add current object key to storage list
