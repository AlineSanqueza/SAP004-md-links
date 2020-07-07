const fs = require('fs');

function mdLinks(file) {
  const regex = /([^\[]+)\](\([^\)]*)/gm; //lê o [texto] sem colchetes e o link sem ()
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf8', (err, data) => {
      console.log(file);
      console.log(data); 
      console.log(err);
      if(err) {
        rejected('Erro: Não foi possível encontrar o arquivo');
      } else {
        const match = data.match(regex);
        const map = match.map((item) => {
          const split = item.split('](');
          const text = split[0].replace('\n ', '');
          const href = split[1].replace(/\)/, '');
          return {text, href, file};
        })
        resolved(map);
        console.log(map) //mostra o texto q antecede o link,o link e o nome do arquivo
      }
    })
  })
}
module.exports = mdLinks;