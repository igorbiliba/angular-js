/**
* редактиоване контактов
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('SolutionContactsController', [
      '$scope', '$http', '$location', '$routeParams', 'Contacts',
      function ($scope, $http, $location, $routeParams, Contacts) {
        setTimeout(function() {//задержка, чтобы не прыгала анимация
          $scope.solutionId = $routeParams.solution;
          $scope.udapte = function(type, contact) {
            if(type == 'enabled') {
              if(!contact.enabled) contact.required = false;
            }

            if(type == 'required') {
              if(contact.required) contact.enabled = true;
            }

            Contacts.update(contact);
          };
          Contacts.all($routeParams.solution, function(contacts) {
            $scope.contacts = contacts;
          });
        }, 200);
      }
    ]);
})();
