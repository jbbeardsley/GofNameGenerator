var GofNameGeneratorService = (function() {
var capitalize = function(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

var generateName = function(name, action) {
	return capitalize(name) 
		+ capitalize(action) 
		+ GofPatterns.getPatternNames();
}

var generate = function(name, action, count) {
	var nameList = [];
	for (var i = 0; i < count; i++) {
		nameList.push(generateName(name, action));
	}

	return nameList;
}

return {
	generate: generate
};
})();