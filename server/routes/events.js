'use strict';

// Event routes use events controller
var events = require('../controllers/events');

module.exports = function(app) {
    app.get('/events', events.all);
};