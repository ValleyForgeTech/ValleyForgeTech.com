'use strict';

var express = require('express'),
    appPath = process.cwd();

var mean = require('meanio');

module.exports = function() {
    
    function bootstrapDependencies() {
        // Register app dependency
        mean.register('app', function() {
            return app;
        });
    }

    bootstrapDependencies();

    // Express settings
    var app = express();
    require(appPath + '/server/config/express')(app);

    return app;
};
