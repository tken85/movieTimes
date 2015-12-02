(function() {
  'use strict';

  angular
    .module('apimods', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'theaters',
      'dvd',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          template:'<img src="http://www.econlife.com/wp-content/uploads/2014/07/Suply-and-demand-movie-theater-seats.jpg..jpg" class="theater">',
          controller: 'MainController'
        })
        .when('/404',{
          template: '<h1>Sorry, page not found</h1>'
        })
        .otherwise({redirectTo: '/404'});
    });

  angular
    .module('underscore',[])
    .factory('_', function($window){
      return $window._;
    });
}());
