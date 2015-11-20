function AddCampaignController($scope, $http) {
	console.log("Hello World from AddCampaignController");

	var refresh = function () {
	$http.get('/campaign').success(function(response) {
		console.log('I got the data I requested');
		$scope.campaign = response;
		$scope.item = "";
	});
};

refresh();

	$scope.addCampaign = function() {
		console.log($scope.item);
		$http.post('/campaign', $scope.item).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/campaign/' + id).success(function(response) {
			refresh();
		});
	};
/*
	$scope.edit = function(id) {
		console.log(id);
		$http.get('/campaign/' + id).success(function(response) {
			$scope.contact = response;
		});
	};

	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/campaign/' + $scope.contact._id, $scope.contact).success(function(response) {
			refresh();
		});
	};

	$scope.deselect = function() {
		$scope.contact = "";
	} */
}