const readFile = require ('./read-file.js');
const readPath = require('./read-dir.js');
const chalk = require ('chalk');
const fs = require ('fs');

const mdLinks = (file, option) => {
  return new Promise((resolved, rejected) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        rejected(`\n${chalk.red('Sorry, file not found')} ☹️\n${chalk.red(err)}`);
      } else if (stats.isDirectory()) {
        resolved(readPath(file, option));
      } else if (stats.isFile) {
        resolved(readFile(file,option));
      }
    });
  });
}
module.exports = mdLinks;
