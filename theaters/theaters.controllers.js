(function() {
  'use strict';

  angular
    .module('theaters')
    .controller('TheatersController', function($scope, $routeParams, MovieService){
      MovieService.getPicks().success(function(picks){
        console.log(picks);
      });
      MovieService.getMovie().success(function(movie){
        console.log(movie);
      });
    })
    .controller('MyTheatersController', function($scope, $routeParams, MovieService){
      console.log('mytheaters controller');
    });

}());
