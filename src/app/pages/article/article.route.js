'use strict';

import articleTpl from './article.html';
import articleEditTpl from './article.edit.html';

import articleController from './article.controller';
import articleEditController from './article.edit.controller';

function routeConfig($stateProvider) {
  'ngInject';
  $stateProvider
    .state('article', {
      abstract: true,
      url: '/article',
      template: '<ui-view></ui-view>'
    })
    .state('article.id', {
      url: '/:id',
      templateUrl: articleTpl,
      controller: articleController,
      controllerAs: 'article',
      params: { detail: null }
    }).state('article.edit', {
      url: '/:id/edit',
      templateUrl: articleEditTpl,
      controller: articleEditController,
      controllerAs: 'edit',
      params: { detail: null }
    });

}

export default routeConfig;
