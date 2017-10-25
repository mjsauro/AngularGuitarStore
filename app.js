//for now, just hard coding a model
var guitars = [
    {
        name: 'Fender Stratocaster',
        price: 400.00,
        description: 'A classic electric guitar',
        canPurchase: true,
        outOfStock: false,
        image: 'images/strat.jpg',
        reviews: [
            {
                stars: 5,
                author: "Matt",
                body: "A great starter guitar!",
            }
        ],
},
    {
        name: 'Fender Telecaster',
        price: 450.00,
        description: "Nice twang",
        canPurchase: true,
        outOfStock: false,
        image: 'images/telecaster.jpg',
        reviews: [
            {
                stars: 4,
                author: "Matt",
                body: "Surf's up, dude!",
            }
        ],
    },
    {
        name: "Gibson Les Paul",
        price: 500.00,
        description: "Another classic",
        canPurchase: false,
        outOfStock: true,
        image: 'images/lespaul.jpg',
        reviews: [
            {
                stars: 5,
                author: "Matt",
                body: "Crunch!",
            }
        ],
    },
    {
        name: "Gibson Explorer",
        price: 600.00,
        description: "Melt your face off",
        canPurchase: true,
        outOfStock: false,
        image: 'images/explorer.jpg',
        reviews: [
            {
                stars: 5,
                author: "Matt",
                body: "Melt your face off!",
            }
        ],
    }
];



//module declaration
var app = angular.module("myApp", []);

//Once i have a reference to the app module, I can add other servvices, controllers, filters,
//and directives to it using built-in functions.
app.controller("myController", function ($scope) {

    $scope.Initialized = function () {
        $scope.models = guitars;
    }

})

app.directive("storePanels", function () {
    var directiveObject = {
        templateUrl: "templates/store-panels.html",
        controller: function ($scope) {
            $scope.SelectTab = function (tab) {
                $scope.tab = tab;
            }
        }
    };
    return directiveObject;
})

app.directive("storeReviews", function () {
    var directiveObject = {
        templateUrl: "templates/store-reviews.html"
    };
    return directiveObject;
})

//app.directive("myDirective", function () {
//    var directiveObject = {
//        template: "<div>This a template directive</div>"
//    }
//    return directiveObject;
//})
//
//app.directive("myOtherDirective", function () {
//    var directiveObject = {
//        templateUrl: "template.html"
//    }
//    return directiveObject;
//})
