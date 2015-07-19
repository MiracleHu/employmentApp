app.controller('direRepCtrl',function($scope,getUserService,$routeParams){

	var reportArr = $routeParams.reportStr.split(",").map(Number);
	console.log(reportArr);

	function getReports(arr,objArr){
		for (var i = 0; i < arr.length; i++) {
			$scope.reports.push(objArr[arr[i]-1]);
		};
	};

	$scope.reports = [];

	getUserService.getUser()
	.success(function(data){
		getReports(reportArr,data.employee);
		console.log($scope.reports);
	})
	.error(function(data) {
		console.log('Error '+data);
	});

	


});