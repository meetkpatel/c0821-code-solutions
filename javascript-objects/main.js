var student = {
  firstName: 'Meet',
  lastName: 'Patel',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Business';
console.log('Value of livesInIrvine: ', student.livesInIrvine);
console.log('Value of previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model X',
  year: 2021
};

vehicle.color = 'Red';
vehicle.isConvertible = false;
console.log('Value of color: ', vehicle.color);
console.log('Value of isConvertible: ', vehicle.isConvertible);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'leo',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('Value of Pet: ', pet);
