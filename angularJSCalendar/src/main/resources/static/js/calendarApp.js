/**
 * 
 */
var calendarApp = angular.module("calendarApp", []);

calendarApp.controller("calendarCtrl", function($scope){
	var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
	var now = new Date();
	$scope.month = monthNames[now.getMonth()];
	$scope.year = now.getFullYear();
});