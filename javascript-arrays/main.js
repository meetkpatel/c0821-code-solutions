var colors = ['red', 'white', 'blue'];
console.log('Value of color[0] :', colors[0]);
console.log('Value of color[1] : ', colors[1]);
console.log('Value of color[2] : ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2]);

colors[2] = 'green';
console.log('Maxico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2]);
console.log(colors);

var students = ['bob', 'bill', 'billy', 'ben'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log(students);
