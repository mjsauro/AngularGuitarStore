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



//Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "Fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module.  In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
var app = angular.module("myApp", []);
//Once I have a reference to the app module, I can add other services, controllers, filters, and directives to it using built-in functions.  In this case, passing two arguments to the controller method will create a new controller
app.controller("myController", function ($scope) {
    $scope.Initialized = function () {
        $scope.models = guitars;
    }

});

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
        templateUrl: "templates/store-reviews.html",
        controller: function ($scope) {
            $scope.AddReview = function (product) {
                //Just to be safe, make sure to add a reviews array if it doesn't already exist
                if (!product.reviews) {
                    product.reviews = [];
                }
                product.reviews.push($scope.newReview);

                //This resets the review
                $scope.newReview = {};

                $scope.reviewForm.$setPristine();
            }

            $scope.StarsInvalid = function () {
                return $scope.reviewForm.stars.$invalid && $scope.reviewForm.stars.$dirty
            }

            $scope.BodyInvalid = function () {
                return $scope.reviewForm.body.$invalid && $scope.reviewForm.body.$dirty
            }

            $scope.AuthorInvalid = function () {
                return $scope.reviewForm.author.$invalid && $scope.reviewForm.author.$dirty
            }

            $scope.FormInvalid = function () {
                return $scope.StarsInvalid() || $scope.BodyInvalid() || $scope.AuthorInvalid();
            }
        }
    };
    return directiveObject;
})


//I can also attach directives to modules:
//app.directive("myDirective", function(){
//    var directiveObject = {
//        template: "<div>This is a template directive.</div>"
//    };
//    return directiveObject;
//});
//A better template directive
//app.directive("myOtherDirective", function(){
//    var directiveObject = {
//        templateUrl: "template.html"
//    };
//    return directiveObject;
//});
