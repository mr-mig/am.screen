'use strict';
var angular = require('angular-cjs');
var createScreen = require('./index');

module.exports = function (definition) {
  var result = createScreen(definition);

  var module = angular.module(result.moduleName, result.moduleDependencies);

  module.config(function ($routeProvider, ChannelsProvider) {
    $routeProvider
      .when(result.route, {
        template: result.template,
        controller: result.screenName
      });

    ChannelsProvider.createChannels(result.channels);
  });

  return module
    .controller(result.screenName, result.controller);
};