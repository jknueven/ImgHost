(function() {
'use strict';

	angular
	.module('imgHost', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/404.html");

	  	$stateProvider
	  	.state('home', {
	  			url: '/',
	  			views: {
      				'main': {
		        	templateUrl: '../views/home.html',
		        	controller: 'homeController',
		        	controllerAs: 'home',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	    	})
	  	.state('add', {
	  		url: "/add", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/add.html',
		        	controller: 'addController',
		        	controllerAs: 'add',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		})
	  	.state('detail', {
	  		url: "/detail", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/detail.html',
		        	controller: 'detailController',
		        	controllerAs: 'detail'
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		     		},
		  		},
	  		});
	});
})();