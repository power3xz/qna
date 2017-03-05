'use strict';

import articleTpl from './article.html';
import articleController from './article.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('article', {
      url: '/article/:id',
      templateUrl: articleTpl,
      controller: articleController,
      controllerAs: 'article',
      params: { detail: null }
    });

}

export default routeConfig;
