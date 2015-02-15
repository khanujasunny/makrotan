angular.module('loginMMSFR',['ui.router' ,'ngResource'])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider','$httpProvider',
        function($stateProvider, $urlRouterProvider,RestangularProvider,$httpProvider) {
            $stateProvider
                .state("login", {
                    url: "/",
                    templateUrl: 'res/template/login.html',
                    controller: 'loginCtrl'
                })
                $urlRouterProvider.otherwise('/');
        }
    ])



angular.module('loginMMSFR').controller("loginCtrl",['$scope','$resource','$http', function($scope,$resource,$http) {
    $scope.login = function(e){
      loginAuth = $resource("https://mms-qa-1.makrotan.com/api/auth", {}, {
        echo: {
                method: 'POST',isArray: false,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            }
    });
    var result = loginAuth.echo({}, { AccessKey: $scope.username, SecretKey: $scope.password }, function() {
      console.log(result);
    });

    };
}]);

