/**
* копирайт
*/
(function () {
  'use strict';

  angular
    .module('app')
    .directive('copyright', function() {
      return {
        template: '150 Points Inc. © 2015 - ' + new Date().getFullYear()
      };
    });

})();
