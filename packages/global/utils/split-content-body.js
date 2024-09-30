const cheerio = require('cheerio');

module.exports = ({ body } = {}) => {
  const $ = cheerio.load(body);
  // Suspecting halfway needs to be calculated like quarterway due to injected ads here
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
