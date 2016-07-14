(function () {
	'use strict';
	angular
		.module('imgHost')
		 .factory('API', function($http) {


		 	function getImages(image)
		 	{
		 		var call = $http({
		          method: 'GET',
		          url: `http://instagramcloneclass.herokuapp.com/images`,
		          headers: {
		          	"X_CSRF_TOKEN" : "jared",
		          }
		        });	
		        return call;

		 	}

		 	function getImg(img)
		 	{
		 		var call = $http({
		 			method: 'GET',
		 			url: `http://instagramcloneclass.herokuapp.com/images/IMAGE_ID_HERE`,
		 			header: {
		 				X_CSRF_TOKEN : "jared",
		 			}
		 		});
		 		return call;
		 	}

		 	return {
		 		getImages:getImages,
		 		//getImg,
		 		//postImage,
		 		//likeImage,
		 	}
	});
})();