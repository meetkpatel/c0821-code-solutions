function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var minutesToSecound = convertMinutesToSeconds(5);
console.log(minutesToSecound / 60 + ' minutes is equal to ' + minutesToSecound + ' seconds');

function greet(name) {
  return 'Hey, ' + name;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('Area of rectangle is: ', getArea(17, 42));

function getFirstName(person) {
  var justFirstName = person.firstName;
  return justFirstName;
}
console.log('Firstname is: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('Last element of Array is: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
