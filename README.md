# Markdown Links
Biblioteca para extrair links em arquivos Markdown.

## Como instalar 

Para executar a biblioteca é necessário ter o Node.js e NPM instalados.

`npm install --global https://github.com/AlineSanqueza/SAP004-md-links.git`

## Como utilizar

`md-links <nome do seu diretório ou arquivo>`

Para saber se o link é válido ou não: `--validate`

`md-links <nome do seu diretório ou arquivo> --validate`

### Comportamento esperado
```sh
$ md-links teste.md --validate

 teste.md 
 Projeto Rede Social https://aline.github.io/SAP004-social-network/src/
 404 Not Found

 teste.md
 Node.js https://nodejs.org/
 200 OK

 teste.md
 Markdown https://pt.wikipedia.org/wiki/Markdown
 200 OK
```
