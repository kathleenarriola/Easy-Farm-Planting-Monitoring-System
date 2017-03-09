'use strict';

(function() {
	angular
		.module('app')
		.controller('PlantCtrl', PlantCtrl);

	function PlantCtrl($scope, $filter, PlantService) {
		$scope.plants = [];

		$scope.addPlant = function() {
			const data = {
				plantName: $scope.plantName,
			    plantVariety: $scope.plantVar, 
			    scientificName: $scope.sciName, 
			    harvestTimeInDays: $scope.harvestTime
			}

			PlantService.addPlant(data);
		};

		$scope.viewPlants = function() {
			PlantService.viewPlants()
				.then((data) => {
					$scope.plants = data.data;
					$scope.plants2 = $scope.plants;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.plants = $filter('filter')($scope.plants2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		$scope.editPlant = function(plantId) {
			const data = {
				plantId: plantId,
				plantName: $scope.plantName,
			    plantVariety: $scope.plantVar, 
			    scientificName: $scope.sciName, 
			    harvestTimeInDays: $scope.harvestTime
			}

			PlantService.editPlant(data);
		};

		$scope.deletePlant = function(plantId) {
			PlantService.deletePlant(plantId);
		};
	}
})();
