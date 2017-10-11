// Initializes the `chat` service on path `/chat`
const createService = require('feathers-nedb');
const createModel = require('../../models/chat.model');
const hooks = require('./chat.hooks');
const filters = require('./chat.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chat',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chat', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chat');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
