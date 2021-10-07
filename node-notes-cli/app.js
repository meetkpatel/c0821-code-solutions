var data = require('./data.json');
let id = data.nextId;

if (process.argv[2] === 'read') {
  for (const i in data.notes) {
    console.log(`${i}: ${data.notes[i]}`);
  }
} else if (process.argv[2] === 'create') {
  data.notes[id] = process.argv[3];
  id++;
  data.nextId = id;
  saveChange();
} else if (process.argv[2] === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
  saveChange();
} else if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3]];
  saveChange();
}

function saveChange() {
  const fs = require('fs');
  const dataStr = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataStr, err => {
    if (err) throw err;
  });
}
