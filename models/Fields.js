/**
* Список полей решения
*/
(function () {
  'use strict';

  angular.module('app').factory('Fields', [
    '$resource', 'UserIdentity', function ($resource, UserIdentity) {
      return {
        //список полей решения
        all:  function(solution, cb) {
          $resource(UserIdentity.user.url + 'api/fields/list/' + solution.id, {}, {'query': { method: 'GET', isArray: true}})
            .query({}, function(fields) {
              cb(fields);
            });
        },
        //изменение поля
        update: function(field, cb) {
          $resource(UserIdentity.user.url + 'api/fields/set-params/' + field.id, {
            data: field
          }, {'query': { method: 'POST'}}).query(function(request) {
            if(typeof cb != "undefined") cb(request);
          });
        }
      };
    }
  ]);
})();
