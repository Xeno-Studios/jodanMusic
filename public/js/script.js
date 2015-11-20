	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/fullCalendar', {
				templateUrl : 'pages/fullCalendar.html',
				controller  : 'fullCalendarController'
			})

			// route for the contact page
			.when('/addCampaign', {
				templateUrl : 'pages/addCampaign.html',
				controller  : 'addCampaignController'
			})

						// route for the contact page
			.when('/modifyCampaign', {
				templateUrl : 'pages/modifyCampaign.html',
				controller  : 'addCampaignController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Fullfillment content';
	});

	scotchApp.controller('fullCalendarController', function($scope) {
		$scope.message = 'Full Calendar content';
	});

	scotchApp.controller('addCampaignController', function($scope) {
		$scope.message = 'Add a campaign content';
	});

	scotchApp.controller('modifyCampaignController', function($scope) {
		$scope.message = 'Modify a campaign content';
	});