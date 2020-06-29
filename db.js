const fs = require('fs');

const db = {
  messages: []
}

fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) console.log(err);
  try {
    data = JSON.parse(data);
    db.messages = data.messages;
  } catch (error) {
    console.log(error);
  }
})

setInterval(()=> {
  fs.writeFile('./data.json', JSON.stringify(db), (err) => {
    if (err) console.log(err);
  });
}, 5000)

module.exports = db;