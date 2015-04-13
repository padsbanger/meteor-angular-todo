angular.module('todo').controller('todoListController', ['$scope', '$location', '$meteor', '$rootScope', function($scope, $location, $meteor,$rootScope) {

  $scope.todos = $meteor.collection(Todos).subscribe('todos');

  $scope.goToToDo = function(id) {
    $location.path('/todos/'+id)
  };

  $scope.addTodo = function(todo) {
    todo.date = new Date();
    $scope.todos.save(todo);
  };

  $scope.remove = function(todo) {
    $scope.todos.remove(todo);
  };

  $scope.clear = function() {
    $scope.todos.remove();
  };

}]);