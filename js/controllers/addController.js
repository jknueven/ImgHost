  'use strict';

angular.module("imgHost").controller("addController", function(API) {

	var vm = this;

	vm.submit = function(){
		var postImage = API.postImage(vm.form);

		postImage.then(function(response){
			console.log(response);
			vm.form = "";
		})

	}

});