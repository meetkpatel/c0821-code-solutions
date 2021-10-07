var fileIndex = 2;
var result = '';
function readProvidedFile(currentFileName) {
  if (fileIndex === process.argv.length) {
    console.log(result);
    return;
  }
  const fs = require('fs');
  fs.readFile(currentFileName, 'utf8', (err, data) => {
    if (err) throw err;
    result += data;
    result += '\n';
    fileIndex++;
    readProvidedFile(process.argv[fileIndex]);
  });
}
readProvidedFile(process.argv[fileIndex]);
