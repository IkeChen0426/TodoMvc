/*
* @Author: 虚竹
* @Date:   2016-09-28 14:47:14
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-28 15:44:43
*/
(function(angular){
	angular.module("myTodoMvc").controller('todoController', [
		'$scope',
		'$location',
		'todoService',
		function($scope, $location, todoService){
		$scope.inputText = '';
		$scope.selector = {};
		$scope.location = $location;
		var path = $location.path();
		if (path == '/') {
			$scope.selector = {};
		}else if(path == '/active'){
			$scope.selector = {completed:false};
		}else if(path == '/completed'){
			$scope.selector = {completed:true};
		}else{
			$scope.selector = {};
		}


		$scope.todoList = todoService.todoList;

		$scope.removeItem = function(todo){
			todoService.removeItem(todo);
		}

		$scope.addItem = function(inputText,event){
			var num = window.event ? event.keyCode : event.which;
			console.log(num);
			if(inputText != " " && inputText != undefined){ 
				console.log(inputText);
				if (num == 13 || num == 108) {
				todoService.addItem(inputText);
				$scope.inputText = ' ';
				}
			}
			
		}

		$scope.clearCompleted = function(){
			$scope.todoList = todoService.clearCompleted();
		}

		$scope.toggle = function() {
			todoService.save($scope.todoList);
		}

	}])
	
})(angular);
