  'use strict';

angular.module("imgHost").controller("homeController", function(API, $timeout) {

	var vm = this;
	
	var data = API.getImages();

	data.then(function(images){
		console.log(images);
		vm.data = images.data.images

	});

	

	vm.postLikes= function(image){
		var like = API.postLikes(image._id);
		
		like.then(function(response){
		console.log(response);
		image.likes ++;
		image.show = true;
		$timeout(function(){
			image.show = false;	
		},400);
		});

	}

	

});