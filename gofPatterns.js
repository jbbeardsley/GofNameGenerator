var GofPatterns = (function () {

	var patternNames = [
		"Factory",
		"Builder",
		"Prototype",
		"Singleton",

		"Adapter",
		"Bridge",
		"Composite",	
		"Decorator",
		"Facade",
		"Flyweight",
		"Proxy",

		"Chain",
		"Command",
		"Interpreter",
		"Iterator",
		"Mediator",
		"Memento",
		"Observer",
		"State",
		"Strategy",
		"Template",
		"Visitor",
	];

	_getPatternName = function() {
		return patternNames[Math.floor(Math.random() * patternNames.length)];
	}

  return {
 
    getPatternName: _getPatternName(),
 
    getPatternNames: function () {
    	var random = Math.random();
    	var length = 0;
    	if (random < 0.025)
    		length = 0;
    	else if (random < 0.9)
    		length = 1;
    	else if (random < 0.975)
    		length = 2;
    	else length = 3;
    	//var length = maxLength - Math.round(Math.pow(Math.random() * range, 1/3)) + 1;

    	var patternName = "";
    	for (var i = 0; i < length; i++) {
    		patternName = patternName.concat(_getPatternName());
    	}

    	return patternName;
    }
  };
 
})();

