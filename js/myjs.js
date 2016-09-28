/*
* @Author: 虚竹
* @Date:   2016-09-24 11:20:53
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-28 16:20:31
*/
(function(angular){
'use strict';
var todoMvc = angular.module('myTodoMvc', ['ngRoute']);

	todoMvc.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'directive/temp.html',
			controller: 'todoController'
		}).when('/active', {
			templateUrl: 'directive/temp.html',
			controller: 'todoController'
		}).when('/completed', {
			templateUrl: 'directive/temp.html',
			controller: 'todoController'
		}).otherwise({
			redirectTo: '/'
		});
	}]);
	
})(angular);
