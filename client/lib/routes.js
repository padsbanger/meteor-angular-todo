angular.module('todo').config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: 'client/views/todos-list.ng.html',
      controller: 'todoListController'
    })
    .state('todoDetails', {
      url: '/todos/:todoId',
      templateUrl: 'client/views/todo-details.ng.html',
      controller: 'todoDetailsController'
    });

  $urlRouterProvider.otherwise("/todos");

}]);
