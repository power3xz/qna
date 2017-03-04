'use strict';

import composeTpl from './compose.html';
import composeController from './compose.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('compose', {
      url: '/compose',
      templateUrl: composeTpl,
      controller: composeController,
      controllerAs: 'compose'
    });

}

export default routeConfig;
