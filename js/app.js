//Javascript file

var tigo = angular.module("tigo",["ngRoute"]);

tigo.factory("scoreFactory",function(){
	var factory = {};
	factory.score = 0;
	factory.start = false;
	return factory;
});

tigo.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl: "pages/dashboard.html",
			controller: "dashboard"
		})
		.when("/img1",{
			templateUrl: "pages/1.html",
			controller: "img1"
		})
		.when("/img2",{
			templateUrl: "pages/2.html",
			controller: "img2"
		})
		.when("/img3",{
			templateUrl: "pages/3.html",
			controller: "img3"
		})
		.when("/score",{
			templateUrl: "pages/score.html",
			controller: "img3"
		})
		.otherwise({
			redirectTo:"/"
		});
		
}]);

var controllers = {};
var title = "Tigo Beta";
var subTitle = "\"A game Preview of Tigo\"";

controllers.img1 = function($scope,scoreFactory){
	$scope.subTitle = subTitle;
	$scope.title = title;
	$scope.score =  scoreFactory.score;
	$scope.imgs = {path:"imgs/1.jpg",name:"apple"};
	$scope.incrementScore = function(){			
		scoreFactory.score = scoreFactory.score + 1;
		$scope.score = scoreFactory.score;
	};
};
controllers.img2 = function($scope,scoreFactory){
	$scope.title = title;
	$scope.subTitle = subTitle;
	$scope.imgs = {path:"imgs/2.jpg",name:"android"};
	$scope.score =  scoreFactory.score;
	$scope.incrementScore = function(){			
		scoreFactory.score = scoreFactory.score + 1;
		$scope.score = scoreFactory.score;
	};
};
controllers.img3 = function($scope,scoreFactory){
	$scope.title = title;
	$scope.subTitle = subTitle;
	$scope.imgs = {path:"imgs/3.jpg",name:"windows"};
	$scope.score =  scoreFactory.score;
	$scope.incrementScore = function(){			
		scoreFactory.score = scoreFactory.score + 1;
		$scope.score = scoreFactory.score;
	};
};
controllers.dashboard = function($scope,scoreFactory)
{
	$scope.title = title;
	$scope.subTitle = subTitle;
	$scope.score = scoreFactory.score;
}



tigo.controller(controllers);