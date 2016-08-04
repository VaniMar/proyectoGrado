angular.module('Plugin', [])
.controller('mergeController', function($scope, $http) {
	
	$scope.merges = {};
	$http.get('/api/mergerequest').success(function(data) {
		$scope.merges = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	$scope.showUsersWithMergeRequest = function() {
		$http.get('/api/userStories')
		.success(function(data) {
			$scope.userStories = data;
			if(merges.user_name == userStories.user_name) {
				
			}
			
		.error(function(data) {
			console.log('Error: ' + data);
		});
	}
});
	
