const parseAssetData = require('./parseAssetData');

const formatAssetData = (data = []) => data.map(parseAssetData);
module.exports = formatAssetData;
