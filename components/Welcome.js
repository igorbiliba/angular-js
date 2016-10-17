/**
* имя пользователя
*/
(function () {
  'use strict';

  angular
    .module('app')
    .directive('welcome', ['UserIdentity', function(UserIdentity) {
      return {
        template : '{{welcome}}',      
        link: function(scope, element, attrs) {//привествие
            if(!UserIdentity.user.name) UserIdentity.loadSession();//загружаем сессию пользователя
            scope.welcome = UserIdentity.user.name;  

            if(!scope.welcome) {//ждем загрузки данных из базы
              UserIdentity.can(function() {
                scope.welcome = UserIdentity.user.name;
              });
            }
        }
      };
    }]);

})();
