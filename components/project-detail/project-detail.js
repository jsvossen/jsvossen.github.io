'use strict';

angular.module('projectDetail', [])
	   .component('projectDetail', {
    		restrict: 'E',
    		templateUrl: 'components/project-detail/project-detail.template.html',
	    	controller: ['$http', '$routeParams',
	      		function ProjectDetailController($http, $routeParams) {
			        var self = this;

			        $http.get('projects/details/' + $routeParams.projectId + '.json').then(function(response) {
			          self.project = response.data;
			          self.mainImg = self.project.images[0];
			        });

			        self.swapImage = function(image) {
			        	self.mainImg = image;
			        }
			    }
    ]
  });