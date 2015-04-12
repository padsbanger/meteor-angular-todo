Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
  var todo = angular.module('todo', ['angular-meteor', 'ui.router']);

  todo.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('todos', {
        url: '/todos',
        templateUrl: 'todos-list.ng.html',
        controller: 'todoListController'
      })
      .state('todoDetails', {
        url: '/todos/:todoId',
        templateUrl: 'todo-details.ng.html',
        controller: 'todoDetailsController'
      });

    $urlRouterProvider.otherwise("/todos");

  }]);

  todo.controller('todoListController', ['$scope', '$meteor', function($scope, $meteor) {
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

  todo.controller('todoDetailsController', ['$scope', '$stateParams','$meteor', function($scope, $stateParams, $meteor) {
    $scope.todoId = $stateParams.todoId;
    $scope.todo = $meteor.object(Todos, $stateParams.todoId);
  }]);

}
