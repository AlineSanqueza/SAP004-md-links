#!/usr/bin/env node

const chalk = require('chalk');
const mdLinks = require('./index.js');

mdLinks(process.argv[2])
  .then((result) => result.forEach((item => {
    console.log('\n', chalk.magenta(item.href), '\n', item.text.substring(0, 50));
  })))
  .catch(console.error);