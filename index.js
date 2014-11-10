'use strict';
var conv = require('am.convention');

var definitionSchema = {
  name: 'element name',
  ngDeps: ['array', 'of', 'angular', 'module names'],
  controller: function (injectable, services, go, here) {
  },
  route: '/screen/url/address',
  template: 'template',
  channels: []
};


module.exports = function createScreen(definition) {
  var deps = definition.ngDeps || [];
  definition.controller = definition.controller || function () {};
  definition.channels = definition.channels || [];

  if (!definition.name) {
    throw new Error('You tried to create a screen without name specified!');
  }

  if (!definition.template) {
    throw new Error('You tried to create a screen without template specified!');
  }

  if (!definition.route) {
    throw new Error('You tried to create a screen without route specified!');
  }

  var moduleName = conv.names.ngModule(conv.structureComponents.screen, definition.name);

  return {
    moduleName: moduleName,
    moduleDependencies: deps,
    screenName: definition.name,
    controller: definition.controller,
    template: definition.template,
    route: definition.route,
    channels: definition.channels
  };
};
