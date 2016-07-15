  'use strict';

angular.module("imgHost").controller("detailController", function(API, $stateParams, $timeout) {

	var vm = this;
	
	var id = $stateParams.imageid

	var data = API.getAnImage(id);

	data.then(function(image){
		console.log(image);
		vm.data = image.data;

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