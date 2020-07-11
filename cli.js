#!/usr/bin/env node
const mdLinks = require('./index.js');
const chalk = require('chalk');
const fetch = require ('node-fetch');
const file = process.argv[2]; 
const option = process.argv[3];

mdLinks(file, option)
	.then((result) => {
		result.map((item) => {
		if (option === '--validate') {
      fetch(item.href)
			.then((response) => {
        console.log(`\n ${chalk.cyan(item.file)} \n ${chalk.green(item.text.substring(0, 50))} ${chalk.green(item.href)} \n ${chalk.blueBright(response.status)} ${chalk.blueBright(response.statusText)}`);
      }); 
		} else {
      console.log(`\n ${chalk.yellow(item.text.substring(0, 50))} ${chalk.yellow(item.href)}`);
		}
	});
}), (error) => {console.log(error)};
