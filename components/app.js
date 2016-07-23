'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ngRoute',
  'ngSanitize',
  'frontPage',
  'projectList',
  'projectDetail'
])
.filter('hasTag', function() {
	return function( items, tag ) {
		if ( tag == null || tag == '' ) {
			return items;
		} else {
		    var filtered = [];
		    angular.forEach(items, function(item) {
		      if(item.tags.indexOf(tag) != -1) {
		        filtered.push(item);
		      }
		    });
		    return filtered;
		}
 	};
})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
        when('/', {
          template: '<front-page></front-page>',
          reloadOnSearch: false
        }).
        when('/project/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        otherwise('/');
}]);
