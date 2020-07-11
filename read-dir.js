const readFile = require('./read-file.js');
const fs = require('fs');
const path = require('path');

const readPath = (dir, option) => {
  return new Promise((resolved, rejected) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        rejected(err);
      } else {
        files.forEach((file) => {
          if (path.extname(file) === '.md') {
            resolved(readFile(`${dir}/${file}`, option));
          }
        });
      }
    });
  });
}
module.exports = readPath;
