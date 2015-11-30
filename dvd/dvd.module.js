(function() {
  'use strict';

  angular
    .module('dvd',[
      'ngRoute',
      'underscore',
      'ui.bootstrap',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/dvd/critPicks',{
          templateUrl: 'dvd/views/critPicks.html',
          controller: 'DVDController',
        })
        .when('/dvd/search',{
          templateUrl: 'dvd/views/search.html',
          controller: 'DVDController',
        })
        .when('/dvd/myPicks',{
          templateUrl: 'dvd/views/myPicks.html',
          controller: 'MyDVDController'
        })
        .otherwise({redirectTo: '/404'});
    });

    angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
}());
