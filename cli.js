#!/usr/bin/env node
const mdLinks = require('./index.js');
const axios = require('axios');
const chalk = require('chalk');
const emoji = require('node-emoji');
const file = process.argv[2]; 
const option = process.argv[3];

mdLinks(file, option)
	.then((result) => {
		result.map((item) => {
		if (option === '--validate') {
      axios.get(item.href)
			.then((response) => {
        console.log(`\n ${chalk.cyan(item.file)} \n ${chalk.green(item.text.substring(0, 50))} \n ${chalk.green(item.href)} \n ${chalk.green(response.status)} ${chalk.green(response.statusText)} ${emoji.emojify(':heavy_check_mark:')}`);
      });
		} else {
      console.log(`\n ${chalk.yellow(item.text.substring(0, 50))} \n ${chalk.yellow(item.href)}`);
		};
	});
}), (error) => { console.log(error) };