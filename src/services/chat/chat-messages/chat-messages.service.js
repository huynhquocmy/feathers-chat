// Initializes the `messages` service on path `/messages`
const createService = require('feathers-nedb');
const createModel = require('../../../models/chat-messages.model');
const hooks = require('./chat-messages.hooks');
const filters = require('./chat-messages.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chat-messages',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chat-messages', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chat-messages');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
