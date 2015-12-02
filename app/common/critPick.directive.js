(function() {
  'use strict';

  angular
    .module('apimods')
    .directive('critPick', function(){
      return {
        restrict: 'EA',
        templateUrl: 'common/views/critPick.directive.html',
        scope: {
          pick: '=',
          action: '&'
        },
      };


    });

}());
