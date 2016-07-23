'use strict';

angular.module('projectList', [])
	.component('projectList', {
    restrict: 'E',
    templateUrl: 'components/project-list/project-list.template.html',
    controller: ['$http','$location', function ProjectCtrl($http, $location) {

        var self = this;
        var params = $location.search();
        self.tag = "" || params.tag;
        self.showLimit = 8;

        $http.get('projects/projects.json').then(function(response) {
          self.portfolio = response.data;
        });

        self.toggleTag = function(tag) {
          self.tag = self.tag != tag ? tag : "";
          $location.search('tag', self.tag);
        }

        self.showAll = function(count) {
          if (count == null) {
            self.showLimit = self.portfolio.projects.length;
          } else {
            self.showLimit = count;
          }
        }

      }
    ]
});
