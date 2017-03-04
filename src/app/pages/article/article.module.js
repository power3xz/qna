'use strict';

import route from './article.route';

const articlePageModule = angular.module('article-module', [
  'ui.router'
]);

articlePageModule
    .config(route);

export default articlePageModule;
