'use strict';

import cardTpl from './card.html';

function cardTComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    scope: {
      question: '='
    },
    templateUrl: cardTpl,
    controller: CardController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function CardController ($scope) {
    'ngInject';
  }

}

export default cardTComponent;
