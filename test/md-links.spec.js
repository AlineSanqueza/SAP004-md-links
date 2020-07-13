const mdLinks = require ('../index.js');

const links = [
  {href:'https://pt.wikipedia.org/wiki/Markdown', file: './test/test.md', text: 'Markdown'},
  {href:'https://nodejs.org/', file: './test/test.md', text: 'Node.js'},
  {href:'https://alinesanqueza.github.io/SAP004-social-network/src/', file: './test/test.md', text: 'Social Network'}
];

/*const validate = [
  {href:'https://pt.wikipedia.org/wiki/Markdown', file: './test/test.md', text: 'Markdown', status: 200},
  {href:'https://nodejs.org/', file: './test/test.md', text: 'Node.js', status: 200},
  {href:'https://alinesanqueza.github.io/SAP004-social-network/src/', file: './test/test.md', text: 'Social Network', status: 404}
];*/
describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('should return 3 links without status', done => {
    mdLinks('./test/test.md').then(resolve => {
      expect(resolve).toEqual(links);
      done();
    });
  });

  it('should return an error', () => {
    mdLinks('./test/est.md')
    .catch((err) => {
      expect(err).toBe('File not found');
    });
  });


});









/*const error = [ 
  {href:'https://alinesanqueza.github.io/SAP004-social-network/src/', text: 'Social Network', status: 404}
];*/

/*describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('should return 3 links with status', (done) => {
    mdLinks('./test', '--validate').catch(result => {
      expect(result).toBe('sorry');
      done();
    });
  });
});*/
/*it('should return an error', (done) => {
  mdLinks('./test/tes.md').catch(result => {
    expect(result).toEqual('ERROR: Sorry, file not found');
    done();
  });
});*/
/*it('should return 3 links with status',(done) => {
  mdLinks('./test/test.md', '--validate')
  .then((result) => {
    expect(result).toEqual(validate);
    done();
  });
});
it('erro', (done) => {
  mdLinks('./test/test.md')
  .catch((err) => {
    expect(err).toBe('Sorry, file not found☹️')
    done()
  })
})*/
/*it('links do dir com validate'), (done) => {
  mdLinks('test/', '--validate')
  .then((result) => {
    expect(result).toEqual(links)
    done();
  });
}*/
/*it('should return 1 link with "not found" status', (done) => {
  mdLinks('./test/test.md', '--validate').then(result => {
    expect(result).toEqual(error);
    done();
  });
});*/
