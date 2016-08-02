angular.module('MainApp', [])

function mainController($scope, $http) {
	

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/mergerequest').success(function(data) {
		$scope.merges = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
}
	
