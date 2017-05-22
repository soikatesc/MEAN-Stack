var app = angular.module('app', ['ngRoute'])
console.log('loading angular config file...')

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/message_board.html',
		controller: 'MessageController as MC'
	})
	.otherwise({
		redirectTo: '/'
	})
})