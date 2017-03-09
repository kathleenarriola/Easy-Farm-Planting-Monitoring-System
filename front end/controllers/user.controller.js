'use strict';

(function() {
	angular
		.module('app')
		.controller('UserCtrl', UserCtrl);

	function UserCtrl($scope, $filter, UserService) {
		$scope.users = [];

		$scope.addAdmin = function() {
		
			const name = $scope.fname + " " + $scope.mi + " " + $scope.lname;
			const data = {
				name: name,
				username: $scope.username,
				password: $scope.password,
				birthday: $scope.bday,
				age: $scope.age,
				ownerFlag: "1",
				farmOwned: $scope.farmOwned,
				fPersonnelFlag: "0"
			}

			UserService.addAdmin(data);
		};

		$scope.viewUsers = function() {
			UserService.viewUsers()
				.then((data) => {
					$scope.users = data.data;
					$scope.users2 = $scope.users;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.users = $filter('filter')($scope.users2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		$scope.editUser = function(userId) {
			const data = {
				UserId: UserId,
				UserName: $scope.username,
			    UserVariety: $scope.UserVar, 
			    scientificName: $scope.sciName, 
			    harvestTimeInDays: $scope.harvestTime
			}

			UserService.editUser(data);
		};

		$scope.deleteUser = function(userId) {
			UserService.deleteUser(UserId);
		};
	}
})();
