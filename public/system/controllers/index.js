'use strict';

angular.module('vft.system').controller('IndexController', ['$scope', 'Events', function ($scope, Events) {

    $scope.events = [];

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    

    $scope.updateEvents = function() {
        Events.query(function(data) {
            console.dir(data.results);
            $scope.events = data.results;
        });
    };
}]);
