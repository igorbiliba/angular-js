/**
* Список решений
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('SolutionsController', [
      '$location', '$scope', '$http', '$window', '$routeParams', 'UserIdentity', 'Solutions',
      function ($location, $scope, $http, $window, $routeParams, UserIdentity, Solutions) {
        UserIdentity.can(function() {//найдем текущего пользователя
          //найдем список решений
          Solutions.all().query({}, function(solutions) {
            $scope.solutions = solutions;
          });
        });
      }
    ]);
})();
