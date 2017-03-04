'use strict';

import route from './compose.route';

const composePageModule = angular.module('compose-module', [
  'ui.router'
]);

composePageModule
    .config(route);

export default composePageModule;
