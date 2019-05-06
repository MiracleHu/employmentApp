app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'Templates/home.html',
    controller: 'empCtrl'
  }).
  when('/detail/:empID', {
    templateUrl: 'Templates/detail.html',
    controller: 'detailCtrl'
  }).
  when('/reports/:reportStr', {
    templateUrl: 'Templates/direcReport.html',
    controller: 'direRepCtrl'
  }).
  otherwise({ redirectTo: '/home' });

});