// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('hotelbApp').controller('hotelReviewsController', ['$scope', '$window', function($scope, $window) {

	}]);

	angular.module('hotelbApp').directive("hotelReviewsForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/hotel-reviews-form.html",
			controller:function(){

			},
			controllerAs: 'hotelReviewsForm'
		};
	});
})();
