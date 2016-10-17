/**
* Список полей решения
*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('SolutionFieldsController', [
      '$scope', '$http', '$location', '$routeParams', 'Solutions', 'Fields', 'Values', '$document',
      function ($scope, $http, $location, $routeParams, Solutions, Fields, Values, $document) {
        $scope.solutionId = $routeParams.solution;
        setTimeout(function() {//задержка, чтобы не прыгала анимация
          //найдем решение
          Solutions.one($routeParams.solution, function(solution) {
          if(solution != null) {
            //при закрытии попапа обновим данные формы
            $document[0].getElementsByTagName("body")[0].addEventListener('updateField', function() {
              setTimeout(function() {
                Fields.all(solution, function(fields) {
                  $scope.fields = fields;
                });
              }, 1000);
            });

            $scope.selectedField = [{name: 'New', value: '0'}];
            $scope.fieldModal = {name: null, id: null, defaultVal: null};//для всплывающего окна редактирования поля
            $scope.updateFieldModal = function(field) {
              $scope.fieldModal = field;
            };

            $scope.updateSelectedField = function(field) {
              $scope.selectedField = field;
              //попутно подгружаем свежие данные
              Values.all($scope.selectedField);
            };
            $scope.selectedField = null;
            //добавить новый value
            $scope.addNewMaterial = function(field) {
               field.values.push({name: 'New', value: '0'});
            };

            //удалит материал
            $scope.deleteValue = function(value) {
              if($scope.selectedField.values.length > 1) {
                var index = $scope.selectedField.values.indexOf(value);
                $scope.selectedField.values.splice(index, 1);
              }
            };

            //редактируем материал
            $scope.updateValues = function(field) {
              Values.update(field, function() { });
            };

            $scope.solution = solution;
            //найдем поля
            Fields.all(solution, function(fields) {
              $scope.fields = fields;
            });

            //обновление поля
            $scope.updateField = function(field) {
              Fields.update(field);
            };

            //загрузка параметров для поля
            $scope.loadOptions = function(field) {
              //подгружаем свежие данные
              Values.all(field);
            };
          }
        });
        }, 200);
      }
    ]);
})();
