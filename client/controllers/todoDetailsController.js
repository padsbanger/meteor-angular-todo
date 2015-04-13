angular.module('todo').controller('todoDetailsController', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor) {
  $scope.todoId = $stateParams.todoId;
  $scope.todo = $meteor.object(Todos, $stateParams.todoId);
}]);
