const getAllPositions = require('./getAllPositions');

module.exports = async () => {
  const positions = await getAllPositions();
  return positions.map(({ symbol }) => symbol);
};
