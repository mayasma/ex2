var app=angular.module('app',['ngRoute']);

app.controller('submitCtr',['$scope',function($scope){

 $scope.ok=function(){
        
        alert("Thank You for Contacting Us , u will recieve a message to your email soon, Good Day");
		
    }  
                             
}]);         



app.config(function($routeProvider){$routeProvider
.when('/', {
    templateUrl: "home.html"})
.when('/aboutus', {
    templateUrl: "aboutus.html"})
.when('/contactus', {
    templateUrl: "contactus.html"})
.otherwise({
    redirectTo : "/"
});
});
