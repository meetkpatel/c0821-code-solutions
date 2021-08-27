/* exported getStudentNames */
function getStudentNames(students) {
  var name = [];
  for (var key in students) {
    name.push(students[key].name);
  }
  return name;
}
