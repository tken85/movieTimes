(function() {
  'use strict';

  angular
    .module('apimods')
    .directive('movieInfo', function(){
      return {
        restrict: 'EA',
        templateUrl: 'common/views/movieInfo.directive.html',
        scope: {
          pick: '=',
          action: '&'
        },
      };


    });

}());
