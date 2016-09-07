/**
 * 
 */
var calendarApp = angular.module("calendarApp", []);

calendarApp.controller("calendarCtrl", function($scope){
	var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
	var now = new Date();
	$scope.month = monthNames[now.getMonth()];
	$scope.year = now.getFullYear();
	
	var daysWithTasks = [];
	for ( i = 1; i < 32; i++ ) {
		daysWithTasks.push( { day: i, 
			tasks: [{ name: "Projekt 1", duration: "4" }, 
			        { name: "Projekt 2", duration: "2"} ]});
	}
	$scope.daysWithTasks = daysWithTasks;
});