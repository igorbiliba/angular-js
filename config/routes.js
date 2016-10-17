(function () {
  'use strict';

  angular
  .module('app')
  .config([
    '$routeProvider', '$locationProvider',
    function ($routeProvide, $locationProvider) {
      $routeProvide
        //soltions
        .when('/', {
          templateUrl: 'app/views/solutions/index.html',
          controller: 'SolutionsController',
          title: '150 Points - Our solutions',
          pageClass: 'page-animate-show'
        })
        .when('/:solution/code', {
          controller: 'SolutionCodeController',
          templateUrl: 'app/views/solutions/code.html',
          title: '150 Points - Get code',
          pageClass: 'page-animate-show'
        })
        .when('/:solution/edit/contacts', {
          controller: 'SolutionContactsController',
          templateUrl: 'app/views/solutions/edit/contacts.html',
          title: '150 Points - Lean Gen form',
          pageClass: 'page-animate-show'
        })
        .when('/:solution/edit/graph', {
          controller: 'SolutionGraphController',
          templateUrl: 'app/views/solutions/edit/graph.html',
          title: '150 Points - Result graph',
          pageClass: 'page-animate-show'
        })
        .when('/:solution/edit/fields', {
          controller: 'SolutionFieldsController',
          templateUrl: 'app/views/solutions/edit/fields.html',
          title: '150 Points - Calculator Form',
          pageClass: 'page-animate-show'
        })
        .when('/:solution/edit/design', {
          controller: 'SolutionDesignController',
          templateUrl: 'app/views/solutions/edit/design.html',
          title: '150 Points - Choose design',
          pageClass: 'page-animate-show'
        })
        //*******
        //leads
        .when('/:solution/leads', {
          controller: 'LeadsController',
          templateUrl: 'app/views/leads/index.html',
          title: '150 Points - Leads',
          pageClass: 'page-animate-show'
        })
        //****
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
    }
  ])
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
      $rootScope.pageClass = current.$$route.pageClass;
    });
  }]);
})();
