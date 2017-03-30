
var app1 = angular.module("AuthorApp",[]);
var app2 = angular.module("Event",[]);

app1.controller("AuthorController",function($scope, $http){
	
	$http.post("https://uwyndlgkhj.execute-api.us-west-2.amazonaws.com/prodevent/eventsearch")
	.then(function(response){
		console.log(response);
		$scope.events = response.data;
	});
	
	$scope.addAuthor = function(newEvent){
		console.log(newEvent);
//        console.log(
//            Object.keys(newEvent));
        var key, keys = Object.keys(newEvent);
        var n=keys.length;
        var dataEvent = {}
        while (n--) {
        key = keys[n];
            dataEvent[key] = newEvent[key].toLowerCase();
        }

		$http.post("https://uwyndlgkhj.execute-api.us-west-2.amazonaws.com/prodevent/event", dataEvent)
		.then(function(response){
            alert("Your Event is Registered");
			console.log(response);
            location.reload();
		});
	}
    
//	$scope.hello = "Niravra welcome"
//	alert("Hello from the Controller");
});

//app2.controller("EventController",function($scope, $http){
//	$scope.addAuthor = function(newEvent){
//		console.log(newEvent);
//        if (newEvent.eventname != null){
//		$http.get("https://uwyndlgkhj.execute-api.us-west-2.amazonaws.com/prodevent/event")
//	.then(function(response){
//		console.log(response);
//		events = response.data;
//	});
//        }
//        
//        <table border = "1">
//        <tr>
//            <td>Event Name</td>
//            <td>Event Location</td>
//            <td>Event Date</td>
//            <td>Date Added</td>
//        </tr>
//		<tbody ng-repeat="event in events">
//        <tr ng-repeat="sub in event">
//            if(newEvent.eventname == sub.eventname){
//			<td>{{sub.eventname}}</td>
//			<td>{{sub.eventlocation}}</td>
//            <td>{{sub.eventdate}}</td>
//            <td>{{sub.date}}</td>
//                }
//		</tr>
//        </tbody>
//	</table> 
//	}
//    
////	$scope.hello = "Niravra welcome"
////	alert("Hello from the Controller");
//});