'use strict';


import _ from 'lodash/core';

import moment from 'moment';

function MainController($log, $state, api) {
  'ngInject';
  const self = this;
  self.questions = [{
    title:" hi"
  }];
  api.query({offset: 0, limit: 3}, (questions) => {
    self.questions = questions;
  });
}

export default MainController;