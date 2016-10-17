/**
* Список значений поля
*/
(function () {
  'use strict';

  angular.module('app').factory('Values', [
    '$resource', 'UserIdentity', function ($resource, UserIdentity) {
      return {
        update: function(field, cb) {
          $resource(UserIdentity.user.url + 'api/values/update/' + field.id, {values: field.values}, {'query': { method: 'POST', isArray: false}})
            .query({}, function(v) {
              cb(v);
          });
        },
        all: function(field) {
          $resource(UserIdentity.user.url + 'api/values/list/' + field.id, {}, {'query': { method: 'GET', isArray: true}})
            .query({}, function(values) {
              field.values = values;
          });
        }
      };
    }
  ]);
})();
