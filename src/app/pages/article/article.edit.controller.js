'use strict';

import  _ from 'lodash/core';

import moment from 'moment';

function ArticleEditController($log, $state, $stateParams, api) {
  'ngInject';
  const self = this;
  self.id = $stateParams.id;
  self.detail = {};

  self.addAnswer = addAnswer;
  self.submitQuestion = submitQuestion;

  getDetail();

  function getDetail() {
    api.query({id: self.id}, (detail) => {
      self.detail = detail[0];
    })
  }

  function addAnswer() {
    self.detail.answers.push({
      laywer: '',
      body: ''
    });
  }

  function submitQuestion() {
    api.update({id: self.detail.id}, self.detail, () => {
      $state.go('article.id', {
        id: self.detail.id
      });
    });
  }

}

export default ArticleEditController;
