const fs = require('fs');
const text = process.argv[2];
const data = new Uint8Array(Buffer.from(text));
fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
