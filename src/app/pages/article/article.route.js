'use strict';

import articleTpl from './article.html';
import articleController from './article.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('article', {
      url: '/article',
      templateUrl: articleTpl,
      controller: articleController,
      controllerAs: 'article'
    });

}

export default routeConfig;
