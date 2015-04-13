angular.module('todo').controller('todoDetailsController', ['$scope', '$stateParams', '$location', '$meteor', function($scope, $stateParams, $location, $meteor) {
  $scope.todoId = $stateParams.todoId;
  $scope.todo = $meteor.object(Todos, $stateParams.todoId, false).subscribe('todos');
  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

  $scope.save = function() {
    $scope.todo.save();
    $location.path('/todos');
  };

  $scope.reset = function() {
    $scope.todo.reset();
    $location.path('/todos');
  };

}]);
