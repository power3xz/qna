'use strict';

export default function (app) {
  app
    .factory('api', apiFactory);

  function apiFactory($resource) {
    return $resource('http://localhost:8081/qna/:id', null, {
      update: { method: 'PUT'}
    });
  }
}