'use strict';

angular.module('login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login',{
		templateUrl: 'public/login/login.html',
		controller:'LoginCtrl'
	})
}])

.controller('LoginCtrl', [function(){
	
}])
