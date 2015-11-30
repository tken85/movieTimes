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
          template: dvd/views/critPicks.html,
          controller: 'DVDController',
        })
        .when('/theaters/search',{
          template: dvd/views/search.html,
          controller: 'DVDController',
        })
        .when('/theaters/myPicks',{
          template: dvd/views/myPicks.html,
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
