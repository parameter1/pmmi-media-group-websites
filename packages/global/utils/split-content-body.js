const cheerio = require('cheerio');

module.exports = ({ body, contentBodyWithInjections } = {}) => {
  // if ther is a script tag assume content has something special and prevent splitting.
  // return everthing in part one to render.
  const regexp = /<script.*>.*<\/script>/g;
  if (body.match(regexp)) return { partOne: contentBodyWithInjections };

  // Suspecting halfway needs to be calculated like quarterway due to injected ads here
  const $ = cheerio.load(contentBodyWithInjections);
  const likelyHalfwayElement = Math.floor($('div').children().length / 4);
  const part1Nodes = [];
  const part2Nodes = [];
  $('div').children().each((index, node) => {
    if (index < likelyHalfwayElement) {
      part1Nodes.push($.html(node));
    } else {
      part2Nodes.push($.html(node));
    }
  });
  const partOne = part1Nodes.join('');
  const partTwo = part2Nodes.join('');
  return { partOne, partTwo };
};
