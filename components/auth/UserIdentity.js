/**
* проверка на авторизацию пользователя
*/
(function () {
  'use strict';

  angular.module('app').factory('UserIdentity', [
    'Users', '$window', '$cookies', function (Users, $window, $cookies) {
      return {
        user: {//данные пользователя
          url: null,
          id: null,
          name: ''
        },
        loadSession: function() {//данные пользователя из сессии
          //данные пользователя
          if($cookies.get('userIdentityData') && !this.user.id) {
            this.user = JSON.parse($cookies.get('userIdentityData'));
          }
        },
        saveUserData: function() {
          $cookies.put('userIdentityData', JSON.stringify(this.user));
        },
        can: function(cb, requiredAuth) {//проверка существования пользователя
          this.loadSession();
          //если requiredAuth не принужнает к обязательной аутентификации
          //и пользователь заполнен при загрузке сессии
          if(requiredAuth !== true && this.user.id != null) return cb(true);

          var self = this;

          // Users.originalApi(function(original) {
            var original = {
              id: 6342,
              name: 'Username'
            };
            Users.check.query({id: original.id, name: original.name}, function(user) {
              self.user = {
                id    : user.id,
                url   : user.serverUrl,
                name  : user.name
              };

              self.saveUserData();

              if(self.user.id != null) return cb(self.user);
              //редирект для аутентификации
              $window.location.href = 'https://www.150points.com/';
            });
          // });
        },
      };
    }
  ]);
})();
