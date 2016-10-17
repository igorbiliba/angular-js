/**
*
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('SolutionDesignController', [
      '$scope', '$http', '$location', '$routeParams', 'Solutions',
      function ($scope, $http, $location, $routeParams, Solutions) {
        $scope.solutionId = $routeParams.solution;
        //найдем решение
        Solutions.one($routeParams.solution, function(solution) {
          //обновление
          $scope.update = function(solution) {
            Solutions.update('design', solution);
          };

          $scope.solution = solution;
        });
      }
    ]);
})();
