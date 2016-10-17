/**
* превью виджета
*/
(function () {
  'use strict';

  angular
    .module('app')
    .filter('unsafe', function($sce) {
      return function(val) {
        return $sce.trustAsHtml(val);
      };
    })
    .directive('preview', ['Solutions', function(Solutions) {
      var widget = '<div id="widget" class="popup">\n'+
        '<div class="popup-padding">\n'+
          '<a href="" class="popup_close"></a>\n'+
        '</div>\n'+
          '<div ng-bind-html="widgetHTML | unsafe"></div>\n'+
      '</div>\n';

      var button = '<a href="#" ng-click="preview(solutionId)" rel="#widget" class="calc__btn calc__btn--blue-theme calc__btn--left popup_open">Preview</a>';
      return {
        template: button + widget,
        link: function(scope) {
          scope.preview = function(solution) {
            scope.widgetHTML = '';
            //загрузка cdn кода
            Solutions.cdn(solution, function(cdn) {
              scope.widgetHTML = cdn
            });
          };
        }
      };
    }]);

})();
