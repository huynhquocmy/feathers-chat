// Initializes the `dialog` service on path `/dialog`
const createService = require('feathers-nedb');
const createModel = require('../../models/dialog.model');
const hooks = require('./dialog.hooks');
const filters = require('./dialog.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dialog',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dialog', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dialog');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
