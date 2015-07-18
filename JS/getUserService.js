app.service('getUserService',function($http){

	this.getUser = function(){
		return $http.get('person.json');
	};
	
	this.employee={};

});