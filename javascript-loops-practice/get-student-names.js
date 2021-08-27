/* exported getStudentNames */
function getStudentNames(students) {
  var name = [];
  for (var key in students) {
    var students2 = students[key];
    for (var key2 in students2) {
      name.push(students2[key2]);
    }
  }
  return name;
}
