var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'inicio.html'
	})
	.when('/noticias', {
		templateUrl:'noticias.html'
	})
	.when('/login', {
		templateUrl:'/login.html'
	})
	.when('/dashboard', {
		resolve:{
			"check": function($location, $rootScope){
				if(!$rootScope.loggedIn){
					$location.path('/login.html');
				}
			}
		},
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});

app.controller('loginCtrl',function($scope, $location, $rootScope){
	$scope.submit=function(){
		if ($scope.username=='admin'&& $scope.password=='admin') {
			$rootScope.loggedIn=true;
			$location.path('/dashboard');
		}else{
			alert('No tiene acceso');
		}
	};
});