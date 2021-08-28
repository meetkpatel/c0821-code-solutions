/* exported toObject */
function toObject(keyValuePair) {
  var arrayObject = {};
  arrayObject[keyValuePair[0]] = keyValuePair[1];
  return arrayObject;
}
// create empty storage object
// add index 0 to property of object and index 1 as propery value
// return storage object
