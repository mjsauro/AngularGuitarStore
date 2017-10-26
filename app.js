//Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "Fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module.  In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
var app = angular.module("myApp", ["storeProducts", "ngRoute"]);


//Once I have a reference to the app module, I can add other services, controllers, filters, and directives to it using built-in functions.  In this case, passing two arguments to the controller method will create a new controller
function myController($scope, $http) {
    $scope.Initialized = function () {
        $http.get("guitars.json").then(function (result) {
            $scope.models = result.data;
        });
    }

}

app.controller("myController", ['$scope', '$http', myController]);
app.controller("bodyController", function ($scope) {

    $scope.register = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    $scope.login = function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    $scope.logout = function () {
        firebase.auth().signOut()
    };

    $scope.onAuthStateChanged = firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $scope.user = user;
            //I need to call $scope.apply because angular is out of sync with this thread, and I need to notify to re-run two-way binding
            $scope.$apply();
        } else {
            $scope.user = null;
            $scope.$apply();
        }
    });
})

app.config(function ($routeProvider, $locationProvider) {
    //$location.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"
    }).when("/page1", {
        templateUrl: "templates/page1.html"
    }).when("/page2", {
        templateUrl: "templates/page2.html"
    }).when("/login", {
        templateUrl: "login.html"
    });
});
