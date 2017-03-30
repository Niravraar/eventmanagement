
//var app1 = angular.module("AuthorApp",[]);
var app2 = angular.module("Event",[]);
//	$scope.hello = "Niravra welcome"
//	alert("Hello from the Controller");


app2.controller("EventController",function($scope, $http){
//	$scope.addEvent = function(newEvent){
//		console.log(newEvent);
//		$http.post("https://uwyndlgkhj.execute-api.us-west-2.amazonaws.com/prodevent/eventsearch")
//	.then(function(response){
//		console.log(response);
//		$scope.events = response.data;
//	});       
//	}
		$http.post("https://uwyndlgkhj.execute-api.us-west-2.amazonaws.com/prodevent/eventsearch")
	.then(function(response){
		console.log(response);
		$scope.events = response.data;
	});       
	
    $scope.filterOnlyFoo = function (item) {
    return item == "foo";
}
});