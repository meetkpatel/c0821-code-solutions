var copyFileName = process.argv[2];
const fs = require('fs');
fs.readFile(copyFileName, 'utf8', (err, data) => {
  if (err) throw err;
  copyToFile(data);
});

function copyToFile(data) {
  const newFile = process.argv[3];
  fs.writeFile(newFile, data, err => {
    if (err) throw err;
  });
}

/// /////CopyFile Method//////////////
// const fs = require('fs');
// const copyfile = process.argv[2];
// const newFile = process.argv[3];
// fs.copyFile(copyfile, newFile, err => {
//   if (err) throw err;
// });
