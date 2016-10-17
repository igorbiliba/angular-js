/**
* пользователь
*/
(function () {
  'use strict';

  angular
    .module('app')
    .factory('Users', [
      '$resource', '$http', function ($resource, $http) {
        return {
          /**
          * запрос на оригинальный сервер 150
          */
          originalApi: function(cb) {
            var url = 'https://www.150points.com/api/user/';
            $http({
              method: 'GET',
              url: url
            }).then(function successCallback(response) {
              cb(response);
            }, function errorCallback(response) {
              cb(response);
            });

          },
          /**
          * запрос на аутентификацию для текущего пользователя
          */
          check: $resource('/api/users/check/:id', {id: '@id', name: '@name'}, {'query': { method: 'POST', isArray: false }}),
        };
      }
    ]);
})();
