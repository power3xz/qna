'use strict';


import _ from 'lodash/core';

import moment from 'moment';

function MainController($log, $state, api) {
  'ngInject';
  const self = this;
  self.questions = [];
  self.offset = 0;
  self.limit = 3;
  self.step = 3;

  self.clickMore = updateQuestions;
  self.writeQuestion = () => $state.go('compose');
  self.clickDetail = clickDetail;

  updateQuestions();

  function updateQuestions() {
    api.query({offset: self.offset, limit: self.limit}, (questions) => {
      self.offset += self.step;
      if (questions.length < 1) {
        const empty = {
          title: '더이상 게시물이 없습니다.'
        };
        self.questions.push(empty);
        self.clickMore = null;
      } else {
        questions.forEach((question) => {
          self.questions.push(question);
        });
      }
    });
  }

  function clickDetail(question) {
    api.query({id: question.id}, (detail) => {
      $state.go('article', {id: question.id, detail: detail[0] });
    });
  }
}


export default MainController;