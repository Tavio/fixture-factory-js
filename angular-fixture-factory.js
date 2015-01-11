angular.module('angular-fixture-factory', []);
angular.module('angular-fixture-factory').constant('FIXTURES', {});
angular.module('angular-fixture-factory').factory('Fixture', function(FIXTURES) {
	
	var fixture = {};
	var dependencyRegex = /\$\{([^}]+)\}/g;

	function generate (fixtureName, templateName) {
		var result = {};
		var rule = FIXTURES[fixtureName][templateName];
		var fieldsInOrder = orderRules(rule);

		fieldsInOrder.forEach(function (fieldName) {
			var fieldValue = rule[fieldName];
			var generatedValue, match;

			if(typeof fieldValue === 'function') {
				generatedValue = fieldValue();
			} else if(typeof fieldValue === 'string') {
				while(match = dependencyRegex.exec(fieldValue)) {
					var dependency = match[1];
					fieldValue = fieldValue.replace(match[0], result[dependency]);
				}
				generatedValue = fieldValue;
			} else {
				generatedValue = fieldValue;
			}

			result[fieldName] = generatedValue;
		});

		return result;
	}

	var gimme = function(fixtureName, templateName, quantity) {
		var result;
		if(typeof quantity != 'undefined') {
			result = [];
			for(var i = 0; i < quantity; i++) {
				result.push(generate(fixtureName, templateName));
			}
		} else {
			result = generate(fixtureName, templateName);
		}
		return result;
	};

	var addTemplate = function(fixtureName, templateName, rule) {
		if(typeof FIXTURES[fixtureName] == 'undefined') {
			FIXTURES[fixtureName] = {};
		} 
		FIXTURES[fixtureName][templateName] = {};
		if(typeof rule != 'undefined') {
			FIXTURES[fixtureName][templateName] = rule;	
		}
	};

	var inheritTemplate = function(fixtureName, childTemplateName, fatherTemplateName, rule) {
		var fatherRule = FIXTURES[fixtureName][fatherTemplateName];
		var childRule = clone(fatherRule);
		if(typeof rule != 'undefined') {
			for(var fieldName in rule) {
				var fieldValue = rule[fieldName];
				childRule[fieldName] = fieldValue;
			}
		}
		FIXTURES[fixtureName][childTemplateName] = childRule;
	};

	fixture.of = function(fixtureName) {
		return {
			addTemplate: function(templateName, rule) {
				addTemplate(fixtureName, templateName, rule);
				return {
					inherits: function(fatherTemplateName, rule) {
						inheritTemplate(fixtureName, templateName, fatherTemplateName, rule);
					}
				};
			},
			gimme: function(templateName, quantity) {
				return gimme(fixtureName, templateName, quantity);
			}
		};
	};

	function randomInt(min, max) {
		this.min = min;
		this.max = max;

		var that = this;

		this.generateValue = function() {
			return Math.floor(Math.random() * (that.max - that.min + 1)) + that.min;
		};
	}

	function randomNumber(min, max) {
		this.min = min;
		this.max = max;

		var that = this;

		this.generateValue = function() {
			return Math.random() * (that.max - that.min) + that.min;
		};
	}

	function randomValue(dataset) {
		this.dataset = dataset;

		var that = this;

		this.generateValue = function() {
			return that.dataset[Math.floor(Math.random() * (that.dataset.length))];
		};
	}

	function uniqueRandomValue(dataset) {
		this.nextValueIndex = 0;
		this.dataset = dataset;
		that = this;

		function shuffleDataset() {
			var temp;
			for(var shufflePosition = 0, iterator = that.dataset.length - 1; iterator > 0; iterator--) {
				shufflePosition = Math.floor(Math.random() * (iterator + 1));
				temp = that.dataset[iterator];
				that.dataset[iterator] = that.dataset[shufflePosition];
				that.dataset[shufflePosition] = temp;
			}
		}

		this.generateValue = function() {
			var value = that.dataset[that.nextValueIndex];
			that.nextValueIndex++;
			return value;
		};

		shuffleDataset();
	}

	function one(fixtureName, templateName) {
		this.fixtureName = fixtureName;
		this.templateName = templateName;

		var that = this;

		this.generateValue = function() {
			return generate(that.fixtureName, that.templateName);
		};
	}

	function many(fixtureName, templateName, quantity) {
		this.fixtureName = fixtureName;
		this.templateName = templateName;
		this.quantity = quantity;

		var that = this;

		this.generateValue = function() {
			result = [];
			for(var i = 0; i < that.quantity; i++) {
				result.push(generate(that.fixtureName, that.templateName));
			}
			return result;
		};	
	}

	function regex(exp) {
		this.exp = exp;
		var that = this;

		this.generateValue = function() {
			return new RandExp(that.exp).gen();
		};
	}

	function instant(exp) {
		this.exp = exp;
		var that = this;

		this.generateValue = function() {
			return Date.parse(exp);
		};
	}

	fixture.randomInt = function(min, max) {
		return new randomInt(min, max).generateValue;
	};

	fixture.randomNumber = function(min, max) {
		return new randomNumber(min, max).generateValue;
	};

	fixture.randomValue = function(dataset) {
		return new randomValue(dataset).generateValue;
	};

	fixture.uniqueRandomValue = function(dataset) {
		return new uniqueRandomValue(dataset).generateValue;
	};

	fixture.uniqueRandomInt = function(min, max) {
		var dataset = initIntegerDataset(min, max);
		return new uniqueRandomValue(dataset).generateValue;
	};

	fixture.one = function(fixtureName, templateName) {
		return new one(fixtureName, templateName).generateValue;
	};

	fixture.has = function(quantity) {
		return {
			of: function (fixtureName, templateName) {
				return new many(fixtureName, templateName, quantity).generateValue
			}
		};
	}

	fixture.regex = function(exp) {
		return new regex(exp).generateValue;
	};

	fixture.instant = function(exp) {
		return new instant(exp).generateValue;
	};

	function clone(obj) {
	    var copy;

	    if (null == obj || "object" != typeof obj) return obj;

	    if (obj instanceof Date) {
	        copy = new Date();
	        copy.setTime(obj.getTime());
	        return copy;
	    }

	    if (obj instanceof Array) {
	        return obj.slice(0);
	    }

	    if (obj instanceof Object) {
	        copy = {};
	        for (var attr in obj) {
	            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
	        }
	        return copy;
	    }

	    throw new Error("Unable to copy obj! Its type isn't supported.");
	}

	function initIntegerDataset(min, max) {
		var dataset = [];
		
		for(var i = min; i <= max - min + 1; i ++) {
			dataset.push(i);
		}

		return dataset;
	}

	function orderRules(rules) {
	    var incoming = {};
	    var outcoming = {};
	    var independentRules = [];
	    for(var rule in rules) {
	        var ruleValue = rules[rule];
	        var match;
	        var numMatches =0;
	        while(match = dependencyRegex.exec(ruleValue))
	        {
	            var referencedRule = match[1];
	            if(!outcoming[referencedRule]) {
	                outcoming[referencedRule] = [];
	            }
	            outcoming[referencedRule].push(rule);
	            if(!incoming[rule]) {
	                incoming[rule] = [];
	            }
	            incoming[rule].push(referencedRule);
	            numMatches ++;
	        }
	        
	        if(numMatches == 0) {
	            independentRules.push(rule);
	        }
	    }
	    var orderedRules = [];
	    while(independentRules.length > 0) {
	        var independentRule = independentRules.pop();
	        orderedRules.push(independentRule);
	        var dependentRules = outcoming[independentRule];
	        if(dependentRules) {
	            dependentRules.forEach(function(dependentRule) {
	                incoming[dependentRule].splice(incoming[dependentRule].indexOf(independentRule), 1);
	                if(incoming[dependentRule].length == 0) {
	                    independentRules.push(dependentRule);
	                    delete incoming[dependentRule];
	                }
	            });
	        }
	        delete outcoming[independentRule];
	    }

	    if(objectHasAnyProperties(outcoming) || objectHasAnyProperties(incoming)) {
	        throw 'Fixture Factory failed to calculate ${} field references.' + 
	        	'Either a cyclic dependency exists or one of the fields references a non-existent field.';
	    }
	    return orderedRules;
	}

	function objectHasAnyProperties(obj) {
	    for(var prop in obj) {
	        if (obj.hasOwnProperty(prop)) {
	            return true;
	        }
	    }
	    return false;
	}

	return fixture;
});