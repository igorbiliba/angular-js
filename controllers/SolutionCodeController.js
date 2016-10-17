/**
* код подключения
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('SolutionCodeController', [
      '$scope', '$http', '$location', '$routeParams', 'Solutions',
      function ($scope, $http, $location, $routeParams, Solutions) {        
        $scope.solutionId = $routeParams.solution;
        Solutions.cdn($routeParams.solution, function(cdn) {          
          $scope.cdn = cdn;
          //кнопка копирования кода
          new Clipboard('.get-code__btn');
        });
      }
    ]);
})();
