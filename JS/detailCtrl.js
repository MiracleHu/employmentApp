app.controller('detailCtrl',function($scope,getUserService,$routeParams){

	var empID = $routeParams.empID;
	console.log(empID);

	getUserService.getUser()
		.success(function(data){
			// execute in sequence in callback function
			$scope.employee = data.employee[empID-1];
			$scope.managerObj = data.employee[$scope.employee.Manager-1];
			// console.log($scope.employee);
			// console.log($scope.managerObj);
		})
		.error(function(data) {
			console.log('Error '+data);
		});

	});
