'use strict';

(function() {
	angular
		.module('app')
		.controller('PlotCtrl', PlotCtrl);

	function PlotCtrl($scope, $filter, PlotService) {
		$scope.plots = [];

		$scope.addPlot = function() {
			const data = {
				length: $scope.length,
				width: $scope.width,
				plantingCapacity: $scope.length * $scope.width,
				cropPlanted: 0
			}

			PlotService.addPlot(data);
		};

		$scope.viewPlots = function() {
			PlotService.viewPlots()
				.then((data) => {
					$scope.plots = data.data;
					$scope.plots2 = $scope.plots;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.plots = $filter('filter')($scope.plots2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		$scope.editPlant = function(plotId) {
			const data = {
				plotId: plotId,
				length: $scope.length,
				width: $scope.width,
				plantingCapacity: $scope.plantingCapacity
			}

			PlotService.editPlot(data);
		};

		$scope.deletePlot = function(plotId) {
			PlotService.deletePlot(plotId);
		};
	}
})();
