const mdLinks = require ('../index.js');

const links = [
  {href:'https://pt.wikipedia.org/wiki/Markdown', text: 'Markdown'},
  {href:'https://nodejs.org/', text: 'Node.js'}
];

const validate = [
  {href:'https://pt.wikipedia.org/wiki/Markdown', file: './test/test.md', text: 'Markdown', status: 200},
  {href:'https://nodejs.org/', file: './test/test.md', text: 'Node.js', status: 200}
];

const error = [ 
  {href:'https://alinesanqueza.github.io/SAP004-social-network/src/', text: 'Not Found', status: 404}
];

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return 2 links', (done) => {
    mdLinks('./test/test.md').then(result => {
      expect(result).toEqual(links);
      done();
    });
  });
});
it('should return an error', (done) => {
  mdLinks('./test/tes.md').catch(result => {
    expect(result).toEqual('ERROR: Sorry, file not found');
    done();
  });
});
it('should return 2 links with status',(done) => {
  mdLinks('./test/test.md', '--validate').then(result => {
    expect(result).toEqual(validate);
    done();
  });
});
it('should return 1 link with "not found" status', (done) => {
  mdLinks('./test/error.md', '--validate').then(result => {
    expect(result).toEqual(error);
    done();
  });
});
