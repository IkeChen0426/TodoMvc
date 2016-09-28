/*
* @Author: 虚竹
* @Date:   2016-09-24 11:20:53
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-28 17:36:47
*/
(function(angular){
angular.module("myTodoMvc").service('todoService', ['$window', function($window){

	var localStorage = $window.localStorage;//获取本地缓存？？？？？
	var todo = localStorage['my_do_list']?JSON.parse(localStorage['my_do_list']) : [];
	this.todoList = todo;

	var self = this;
	//保存更新的数据
	this.save = function(todoList){
		localStorage['my_do_list'] = JSON.stringify(todoList);
	}
	//删除
	this.removeItem = function(todo){
			var a = self.todoList.indexOf(todo);
			console.log(a);
			self.todoList.splice(a, 1);
			this.save(self.todoList);
		}


	this.addItem = function(inputText,event){
			var obj = {
				id: self.todoList.length+1,
				text: inputText,
				completed: false
			}
			self.todoList.push(obj);
			this.save(self.todoList);				
		}

	this.clearCompleted = function(){
			var uncompleted = [];
			for(var i = 0; i < self.todoList.length; i++){
				if (!self.todoList[i].completed) {
					uncompleted.push(self.todoList[i]);
				}
			}
			this.save(self.todoList);
			return uncompleted;
		}

}]);
		
		/*this.removeItem = function(todo){
			var a = $scope.todoList.indexOf(todo);
			console.log(a);
			$scope.todoList.splice(a, 1);
		}*/

		/*self.addItem = function(inputText,event){
			
				var obj = {
					id: self.todoList.length+1,
					text: inputText,
					completed: false
				}
				self.todoList.push(obj);					
		}*/


	
})(angular);
