(function () {
  'use strict';

  angular
  	.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies'])
  	.run(['UserIdentity', function(UserIdentity) {
  		//инициализвация пользователя при загрузке приложения  		
  		UserIdentity.can(function(has) {}, true);
  	}]);
})();