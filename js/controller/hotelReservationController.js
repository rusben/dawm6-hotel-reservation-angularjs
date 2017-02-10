// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('hotelbApp').controller('hotelReservationController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.reservation = new reservationObj();
		$scope.reservation.setTotalPrice(50);
		$scope.reservation.setCheckInDate(new Date());
		$scope.reservation.setCheckOutDate((new Date()).setDate((new Date()).getDate() + 1));


		;

		//Scope variables
		$scope.showAction ;
		$scope.validDates = true;
		$scope.specialRequests= ["Breakfast in the room", "Dinner on the roof ", "Romantic visit of the city"];
		$scope.checkInTime = ["00:00", "01:00","02:00"];
		$scope.checkOutTime = ["00:00", "01:00","02:00"];

		//Date pickers scope variables and functions
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yyyy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		$scope.checkInDate = {
			opened: false
		};

		$scope.checkOutDate = {
			opened: false
		};

		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};

		$scope.openCheckOutDate = function() {
			$scope.checkOutDate.opened = true;
		};

		$scope.validateDates = function() {
			if($scope.reservation.getCheckOutDate() <= $scope.reservation.getCheckInDate()) {
				// TODO show errors, try to change the validity for the model
				//console.log($scope.reservationManagement);
				//$scope.reservationManagement.checkInDate.$invalid = true;
				//$scope.reservationManagement.checkOutDate.$invalid = true;
				//$scope.reservationManagement.$invalid = true;
				$scope.validDates = false;
			} else {
				$scope.validDates = true;

				// TODO add the price somewhere in an attribute
				$scope.reservation.setTotalPrice(
					calculateNumberDays(
						$scope.reservation.getCheckInDate(),
						$scope.reservation.getCheckOutDate()
					) * 50
				);
			}
		}

		$scope.specialReqMng = function (indexChecked) {
			if($("#specialReq"+indexChecked).is(":checked")) {
				$scope.reservation.addSpecialRequests($scope.specialRequests[indexChecked]);
			}
			else {
				$scope.reservation.removeSpecialRequests($scope.specialRequests[indexChecked]);
			}
		}

		this.submit = function () {
			console.log($scope.reservation);


			$scope.reservation = new reservationObj();

			$scope.reservationManagement.$setPristine();
			$scope.showAction = 0;
		};

	}]);

	angular.module('hotelbApp').directive("hotelReservationForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/hotel-reservation-form.html",
			controller:function(){

			},
			controllerAs: 'hotelReservationForm'
		};
	});
})();


//Own code
/*
	Datepicker functions
*/
// Disable weekend selection
function disabled(data) {
	var date = data.date,
	mode = data.mode;
	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}
