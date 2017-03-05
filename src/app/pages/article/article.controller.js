'use strict';

import  _ from 'lodash/core';

import moment from 'moment';

function ArticleController($log, $stateParams) {
  'ngInject';
  console.log($stateParams);

  $log.debug('Hello from main controller!');
}

export default ArticleController;
