app.controller('empCtrl', ['$scope','getUserService',function ($scope, getUserService) {

	$scope.employees = [];

	getUserService.getUser()
		.success(function (data) {
			$scope.employees = data.employee;
			// console.log($scope.employees);
		})
		.error(function (data) {
			console.log('Error ' + data);
		});

}]);