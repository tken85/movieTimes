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
          templateUrl: 'theaters/views/critPicks.html',
          controller: 'TheatersController as theaterCtrl',
        })
        .when('/theaters/search',{
          templateUrl: 'theaters/views/search.html',
          controller: 'TheatersController as theaterCtrl',
        })
        .when('/theaters/myPicks',{
          templateUrl: 'theaters/views/myPicks.html',
          controller: 'MyTheatersController as myTheaterCtrl'
        });
    });

    angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });

}());
