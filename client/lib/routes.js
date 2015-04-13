angular.module('todo').run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/todos");
    }
  });
}]);

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
      controller: 'todoDetailsController',
      resolve: {
        'currentUser': ['$meteor', function($meteor) {
          return $meteor.requireUser();
        }]
      }
    });

  $urlRouterProvider.otherwise("/todos");

}]);
