/**
* список лидов
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('LeadsController', [
      '$scope', '$http', '$location', '$routeParams', 'Leads',
      function ($scope, $http, $location, $routeParams, Leads) {
        //количество элементов по умолчнию
        var defaultLen = 20;

        setInterval(function() {//автоподгрузка
          //или мы долистали до конца страницы
          if ($(document).scrollTop() + $(window).height() > $('.footer-inner').offset().top && $(document).scrollTop() - $('.footer-inner').offset().top < $('.footer-inner').height()) {
            $scope.load();
          }
        }, 300);

        $scope.solutionId = $routeParams.solution;
        $scope.leads = [];
        var lastLoadCount = null;
        //подгрузка лидов
        $scope.load = function() {
          if($scope.isLoad) return;
          //если еще не закончились
          if(lastLoadCount !== 0) {
            $scope.isLoad = true;
            Leads.all($routeParams.solution, $scope.leads.length, function (leads) {
              $scope.isLoad = false;
              lastLoadCount = leads.length >= defaultLen ? leads.length : 0;//проверка на конец списка
              if(leads.length > 0) {
                for(var i in leads) {
                  var lead = leads[i];
                  if(lead) $scope.leads.push(lead);
                }
              }
            });
          }
        };
        $scope.load();
      }
    ]);
})();
