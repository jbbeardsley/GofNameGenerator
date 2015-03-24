var GofNameGeneratorApp = (function() {

angular
	.module('GofNameGeneratorApp', [])
	.controller('GofNameGeneratorController', GofNameGeneratorController);	

function GofNameGeneratorController() {
	var model = this;
	model.generatedNameList = [];
	model.name = "";
	model.action = "";

	model.generate = function() {
		model.generatedNameList = GofNameGeneratorService.generate(model.name, model.action, 10);
	}
}
})();