angular.module('todo').controller('todoListController', ['$scope', '$meteor', function($scope, $meteor) {
  $scope.todos = $meteor.collection(Todos);

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