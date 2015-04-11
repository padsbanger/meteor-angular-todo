Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
  var todo = angular.module('todo', ['angular-meteor']);

  todo.controller('todoListController', ['$scope', '$meteor', function($scope, $meteor) {

    $scope.todos = $meteor.collection(Todos);
    $scope.addTodo = function(todo) {
      $scope.todos.save(todo);
    };

    $scope.remove = function(todo) {
      $scope.todos.remove(todo);
    };

    $scope.clear = function() {
      $scope.todos.remove();
    };

  }]);

}
