'use strict';

angular.module('frontPage', [])
	   .component('frontPage', {
    		restrict: 'E',
    		templateUrl: 'components/front-page/front-page.template.html',
    		controller: 'frontCtrl'
 		})
	   .controller('frontCtrl',['$scope', '$location', '$anchorScroll','$timeout', 
		    function($scope, $location, $anchorScroll, $timeout) {

		  	if ($location.search().tag) {
		    	$anchorScroll('portfolio');
		    } else if($location.hash()) {
		        $timeout(function() {
		        	$anchorScroll();
		    	}, 100);
		    }
		}]);