const fs = require('fs');

const readFile = (file) => {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err) {
        rejected(err)//`\n${chalk.red('Sorry, file not found')} ${emoji.emojify(':white_frowning_face:')}\n${chalk.red(err)}`);
      } else {
        const regex = data.match(/([^\[]+)\](\([^\)]*)/gm);
        const result = regex.map((item) => {
          const split = item.split('](');
          const text = split[0].replace('\n ', '');
          const href = split[1].replace(/\)/, '');
          return {text, href, file};
        });
        resolved(result);
        //console.log(result)
      };
    });
  });
};
module.exports = readFile;

