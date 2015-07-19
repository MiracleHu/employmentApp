app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'Templates/home.html',
    controller: 'empCtrl'
  });
  $routeProvider.when('/detail/:empID', {
    templateUrl: 'Templates/detail.html',
    controller: 'detailCtrl'
  });
  $routeProvider.when('/reports/:reportStr', {
    templateUrl: 'Templates/direcReport.html',
    controller: 'direRepCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/home' });

});