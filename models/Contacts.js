/**
* Контакты решения
*/
(function () {
  'use strict';

  angular.module('app').factory('Contacts', [
    '$resource', 'UserIdentity', function ($resource, UserIdentity) {
      return {
        update: function(contact) {
          $resource(UserIdentity.user.url + 'api/contacts/update/' + contact.id, {data: contact}, {'query': { method: 'POST', isArray: false}})
            .query({}, function() {});
        },
        all: function(solutionId, cb) {
          $resource(UserIdentity.user.url + 'api/contacts/list/' + solutionId, {}, {'query': { method: 'GET', isArray: true}})
            .query({}, function(contacts) {
              cb(contacts);
          });
        }
      };
    }
  ]);
})();
