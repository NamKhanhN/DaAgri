const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'namkhanh2k7',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;
