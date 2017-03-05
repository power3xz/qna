'use strict';

import  _ from 'lodash/core';

import moment from 'moment';

function ArticleController($log, $state, $stateParams, api) {
  'ngInject';

  const self = this;
  self.id = $stateParams.id;
  self.detail = {};

  self.modifyQuestion = modifyQuestion
  self.deleteQuestion = deleteQuestion;

  getDetail();

  function getDetail() {
    api.query({id: self.id}, (detail) => {
      self.detail = detail[0];
    });
  }

  function modifyQuestion() {
    $state.go('article.edit', { id: self.detail.id });
  }

  function deleteQuestion() {
    const bool = confirm('삭제 하시겠습니까?');
    if (bool) {
      api.delete({ id: self.detail.id }, () => {
        $state.go('main');
      });
    }
  }
}

export default ArticleController;
