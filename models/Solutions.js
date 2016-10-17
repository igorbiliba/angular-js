/**
* Список решений
*/
(function () {
  'use strict';

  angular.module('app').factory('Solutions', [
    '$resource', 'UserIdentity', function ($resource, UserIdentity) {
      return {
        //список решений
        all:  function() {
          return $resource(UserIdentity.user.url + 'api/solutions/list', {}, {'query': { method: 'GET', isArray: true}});
        },
        //одно решение
        one: function(id, cb) {
          var list = this.all().query({}, function(solutions) {
            for(var i in solutions) {
              var solution = solutions[i];
              if(solution.id == id) return cb(solution);
            }
          });

          cb(null);
        },
        //изменение решения
        update: function(param, solution, cb) {
          $resource(UserIdentity.user.url + 'api/solutions/set-param/' + solution.id, {
            attr: param,
            val: solution[param]
          }, {'query': { method: 'POST'}}).query(function(request) {
            if(typeof cb != "undefined") cb(request);
          });
        },
        cdn: function(solutionId, cb) {
          $resource(UserIdentity.user.url + 'api/solutions/cdn/' + solutionId, {}, {'query': { method: 'GET', isArray: false}})
            .query(function(code) {
              cb(code.code);
          });
        }
      };
    }
  ]);
})();
