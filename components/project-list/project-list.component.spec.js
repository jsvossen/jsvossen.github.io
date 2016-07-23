'use strict';

describe('projectList', function() {

  // Load the module that contains the `projectList` component before each test
  beforeEach(module('projectList'));

  // Test the controller
  describe('ProjectCtrl', function() {
    var $httpBackend, ctrl;

    var testData = [
                    {name: 'Breve Coffee', tags: ["Drupal","HTML/CSS"]}, 
                    {name: 'Friends of Wings', tags: ["Drupal","HTML/CSS"]},
                    {name: 'Ruby Chess', tags: ["Ruby","Games"]},
                    {name: 'JAnSoN', tags: ["Ruby"]}
                    ];

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/projects.json').respond(testData);

      ctrl = $componentController('projectList');
    }));

    it('should create a projects list with 4 projects fetched with `$http`', function() {
      expect(ctrl.portfolio).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.portfolio).toEqual(testData);
    });

    it('should create empty tag model', function() {
      expect(ctrl.tag).toEqual("");
    });

    it('should set tag to a given category', function() {
      ctrl.toggleTag("Ruby");
      expect(ctrl.tag).toEqual("Ruby");
      ctrl.toggleTag("Games");
      expect(ctrl.tag).toEqual("Games");
    });

    it('should clear tag if same category is given', function() {
      ctrl.toggleTag("Ruby");
      expect(ctrl.tag).toEqual("Ruby");
      ctrl.toggleTag("Ruby");
      expect(ctrl.tag).toEqual("");
    });

  });

});
