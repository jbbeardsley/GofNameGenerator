var app = angular.module('gofNameGeneratorApp', []);
app.controller('gofNameGeneratorController', function($scope) {

	var generatedNameList;
	var modelName;
	var modelAction;
	
	$scope.capitalize = function(s) {
    	return s.charAt(0).toUpperCase() + s.slice(1);
	}

	$scope.generateName = function() {
		return $scope.capitalize($scope.modelName) 
			+ $scope.capitalize($scope.modelAction) 
			+ GofPatterns.getPatternNames();
	}

	$scope.generate = function() {
		$scope.generatedNameList = [];
		for (var i = 0; i < 10; i++) {
			$scope.generatedNameList.push($scope.generateName());
		}
	}
	
});
