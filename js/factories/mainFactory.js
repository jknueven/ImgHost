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

		 	function postImage(data)
		 	{
		 		var going = $http({
		 			method: 'POST',
		 			data: data,
		 			headers: {
		 				"X_CSRF_TOKEN" : "jared",
		 			},
		 			url: `http://instagramcloneclass.herokuapp.com/image/post`,
		 		});
		 		return going;
		 	}

		 	function postLikes(id)
		 	{
		 		var data = {
		 			imageid: id,
		 		}
		 		var liked = $http({
		 			method: "POST",
		 			data: data,
		 			headers: {
		 				"X_CSRF_TOKEN" : "jared",
		 			},
		 			url: 'http://instagramcloneclass.herokuapp.com/images/vote',
		 		});
		 		return liked;
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
		 		postImage:postImage,
		 		postLikes:postLikes,
		 	}
	});
})();