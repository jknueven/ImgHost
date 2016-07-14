  'use strict';

angular.module("imgHost").controller("homeController", function(API) {

	var vm = this;
	
	var data = API.getImages();

	data.then(function(images){
		vm.data = images.data.images

	})

});