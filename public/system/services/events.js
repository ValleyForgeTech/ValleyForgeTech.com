'use strict';


// Events service used to obtain Events
angular.module('vft.system').factory('Events', ['$resource', function($resource) {
    return $resource('events/:eventId', {
        eventId:'@_id'
    }, {
        query: {
            method: 'GET',
            isArray: false, // Not returning an array
        }
    });
}]);
