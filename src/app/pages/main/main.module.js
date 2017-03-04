'use strict';

import route from './main.route';

import './main.style.scss';

const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

mainPageModule
    .config(route);

export default mainPageModule;
