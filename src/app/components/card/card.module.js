'use strict';

import cardDirective from './card.directive';

const cardModule = angular.module('card-module', []);

cardModule
  .directive('questionCard', cardDirective);

export default cardModule;
