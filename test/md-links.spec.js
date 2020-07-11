const mdLinks = require ('../index.js');

const links = [
  {href:'https://pt.wikipedia.org/wiki/Markdown', file: './test/test.md', text: 'Markdown'},
  {href:'https://nodejs.org/', file: './test/test.md', text: 'Node.js'},
  {href:'https://alinesanqueza.github.io/SAP004-social-network/src/', file: './test/test.md', text: 'Social Network'}
];

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Should return 3 links', (done) => {
    mdLinks('./test/test.md').then(result => {
      expect(result).toEqual(links);
      done();
    });
  });
});
it('Should return an error', (done) => {
  mdLinks('./test/test.md').then(result => {
    expect(result).toEqual(links);
    done();
  });
});
it('Should return 3 links with status', (done) => {
  mdLinks('./test/test.md', '--validate').then(result => {
    expect(result).toEqual(links);
    done();
  });
});
