app.controller('empCtrl',function($scope,getUserService,$location){

	$scope.employees = [];
	
	getUserService.getUser()
	.success(function(data){
		$scope.employees = data.employee;
		// console.log($scope.employees);
	})
	.error(function(data) {
		console.log('Error '+data);
	});

	$scope.empDetail = function(employee){
		getUserService.employee = employee;
		$location.path('/detail');
		// console.log(getUserService.employee);
	};


});