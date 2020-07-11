const fs = require('fs');

const readFile = (file) => {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err) {
        rejected(err.message);
      } else {
        const regex = data.match(/([^\[]+)\](\([^\)]*)/gm);
        const result = regex.map((item) => {
          const split = item.split('](');
          const text = split[0].replace('\n ', '');
          const href = split[1].replace(/\)/, '');
          return {text, href, file};
        });
        resolved(result);
      }
    });
  });
}
module.exports = readFile;
