const { handleContact } = require('../contact-handler');

module.exports = async (request, response) => handleContact(request, response);
