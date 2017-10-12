'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');
const processMessage = require('../../../hooks/process-message');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ processMessage() ],
    update: [ processMessage() ],
    patch: [ processMessage() ],
    remove: []
  },

  after: {
    all: [
      populate({
        schema: {
          include: [{
            service: 'users',
            nameAs: 'user',
            parentField: 'userId',
            childField: '_id'
          }]
        }
      })
    ],
    find: [(hook) => {
      const userId = hook.params.user._id;
      return hook.app.service('users').get(userId).then((user) => {
        hook.result.user = user;
        return hook;
      });
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
