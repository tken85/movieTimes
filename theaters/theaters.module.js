(function() {
  'use strict';

  angular
    .module('theaters',[
      'ngRoute',
      'underscore',
      'ui.bootstrap',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/theaters/critPicks',{
          template: theaters/views/critPicks.html,
          controller: 'TheatersController',
        })
        .when('/theaters/search',{
          template: theaters/views/search.html,
          controller: 'TheatersController',
        })
        .when('/theaters/myPicks',{
          template: theaters/views/myPicks.html,
          controller: 'MyTheatersController'
        });
    });

    angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });

}());
