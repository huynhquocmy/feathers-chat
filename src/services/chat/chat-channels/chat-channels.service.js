// Initializes the `channels` service on path `/channels`
const createService = require('feathers-nedb');
const createModel = require('../../../models/chat-channels.model');
const hooks = require('./chat-channels.hooks');
const filters = require('./chat-channels.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chat-channels',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chat-channels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chat-channels');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
