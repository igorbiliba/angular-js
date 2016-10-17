/**
* список лидов
*/
(function () {
  'use strict';

  angular.module('app').factory('Leads', [
    '$resource', 'UserIdentity', function ($resource, UserIdentity) {
      return {
        all: function(solutionId, offset, cb) {
          return $resource(UserIdentity.user.url + 'api/leads/list/' + solutionId, { offset: offset }, {'query': { method: 'GET', isArray: true}})
            .query({}, function(leads) {
              cb(leads);
          });
        }
      };
    }
  ]);
})();
