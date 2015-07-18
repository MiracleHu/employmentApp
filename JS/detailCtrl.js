app.controller('detailCtrl',function($scope,getUserService,$location){

	$scope.employee = getUserService.employee;
	$scope.back = function(){
		$location.path('/home');
		getUserService.employee={};
	};

	$scope.managerObj={};
	$scope.findManager = function(managerID){

		getUserService.getUser()
		.success(function(data){
			$scope.managerObj = data.employee[managerID-1];
			// console.log($scope.employees);
		})
		.error(function(data) {
			console.log('Error '+data);
		});
	};

	$scope.$watch('$scope.employee', function() {$scope.findManager($scope.employee.Manager);});
	//Here we can use $routeParams to solve this,https://docs.angularjs.org/tutorial/step_07
	
});