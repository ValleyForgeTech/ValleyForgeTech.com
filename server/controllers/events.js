'use strict';

var https = require('https'),
    config = require('../config/config');

exports.all = function(req, response) {
    
    response.setHeader('Content-Type', 'application/json');

    // The Meetup API URL to request the events from.
    var eventsUrl = 'https://api.meetup.com/2/events?group_urlname=valleyforgetech&page=20&key=' + config.meetup.key;

    var responseString = '';

    https.get(eventsUrl, function(eventsResponse) {
        eventsResponse.on('data', function(data) {
            // Concatinate the response.
            responseString += data;
        });

        eventsResponse.on('end', function() {
            // Send the Meetup response back to the client
            response.end(responseString);
        });
    }).on('error', function(e) {
        console.log('Error getting events: ' + e.message);
    });
};
