'use strict';

import  _ from 'lodash/core';

import moment from 'moment';

function ComposeController($log, $state, api) {
  'ngInject';

  const self = this;

  self.question = {
    title: '',
    body: '',
    answers: [{
      lawyer: '',
      body: ''
    }]
  };

  self.addAnswer = () => self.question.answers.push({ lawyer: '', body: ''});
  self.submitQuestion = submitQuestion;

  function submitQuestion() {
    if (isValidQuestion(self.question)) {
      let q = new api(self.question);
      api.$save(() => {
        $state.go('main');
      });
    }
  }

  function isValidQUestion() {
    return true;
  }
}

export default ComposeController;
