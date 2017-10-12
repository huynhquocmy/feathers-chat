const messages = require('./chat/chat-messages/chat-messages.service.js');
const users = require('./users/users.service.js');
const dialog = require('./dialog/dialog.service.js');
const payment = require('./payment/payment.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(messages);
  app.configure(users);
  app.configure(dialog);
  app.configure(payment);
};
