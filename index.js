const readFile = require('./read-file.js');
const chalk = require ('chalk');
const emoji = require('node-emoji'); 
const fs = require('fs');

const mdLinks = (file, option) => {
  return new Promise((resolved, rejected) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        rejected(`\n${chalk.red('Sorry, file not found')} ${emoji.emojify(':white_frowning_face:')}\n${chalk.red(err)}`);
      } else if (stats.isFile()) {
        resolved(readFile(file, option));
      };
    });
  });
};
module.exports = mdLinks;
