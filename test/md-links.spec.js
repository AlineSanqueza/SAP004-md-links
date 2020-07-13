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
