angular.module('angular-fixture-factory', []);
angular.module('angular-fixture-factory').constant('FIXTURES', {});
angular.module('angular-fixture-factory').factory('Fixture', function(FIXTURES) {
	
	//
	// randexp v0.4.0
	// Create random strings that match a given regular expression.
	//
	// Copyright (C) 2014 by Roly Fentanes (https://github.com/fent)
	// MIT License
	// http://github.com/fent/randexp.js/raw/master/LICENSE
	//
	!function(){var a=function(b,c){var d=a.resolve(b,c||"/"),e=a.modules[d];if(!e)throw new Error("Failed to resolve module "+b+", tried "+d);var f=e._cached?e._cached:e();return f};a.paths=[],a.modules={},a.extensions=[".js",".coffee"],a._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},a.resolve=function(){return function(b,c){function h(b){if(a.modules[b])return b;for(var c=0;c<a.extensions.length;c++){var d=a.extensions[c];if(a.modules[b+d])return b+d}}function i(b){b=b.replace(/\/+$/,"");var c=b+"/package.json";if(a.modules[c]){var e=a.modules[c](),f=e.browserify;if(typeof f=="object"&&f.main){var g=h(d.resolve(b,f.main));if(g)return g}else if(typeof f=="string"){var g=h(d.resolve(b,f));if(g)return g}else if(e.main){var g=h(d.resolve(b,e.main));if(g)return g}}return h(b+"/index")}function j(a,b){var c=k(b);for(var d=0;d<c.length;d++){var e=c[d],f=h(e+"/"+a);if(f)return f;var g=i(e+"/"+a);if(g)return g}var f=h(a);if(f)return f}function k(a){var b;a==="/"?b=[""]:b=d.normalize(a).split("/");var c=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";c.push(f)}return c}c||(c="/");if(a._core[b])return b;var d=a.modules.path(),e=c||".";if(b.match(/^(?:\.\.?\/|\/)/)){var f=h(d.resolve(e,b))||i(d.resolve(e,b));if(f)return f}var g=j(b,e);if(g)return g;throw new Error("Cannot find module '"+b+"'")}}(),a.alias=function(b,c){var d=a.modules.path(),e=null;try{e=a.resolve(b+"/package.json","/")}catch(f){e=a.resolve(b,"/")}var g=d.dirname(e),h=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(a.modules);for(var i=0;i<h.length;i++){var j=h[i];if(j.slice(0,g.length+1)===g+"/"){var k=j.slice(g.length);a.modules[c+k]=a.modules[g+k]}else j===g&&(a.modules[c]=a.modules[g])}},a.define=function(b,c){var d=a._core[b]?"":a.modules.path().dirname(b),e=function(b){return a(b,d)};e.resolve=function(b){return a.resolve(b,d)},e.modules=a.modules,e.define=a.define;var f={exports:{}};a.modules[b]=function(){return a.modules[b]._cached=f.exports,c.call(f.exports,e,f,f.exports,d,b),a.modules[b]._cached=f.exports,f.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),a.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),a.define("/node_modules/ret/package.json",function(a,b,c,d,e){b.exports={main:"./lib/index.js"}}),a.define("/node_modules/ret/lib/index.js",function(a,b,c,d,e){var f=a("./util"),g=a("./types"),h=a("./sets"),i=a("./positions");b.exports=function(a){var b=0,c,d,e={type:g.ROOT,stack:[]},j=e,k=e.stack,l=[],m=function(b){f.error(a,"Nothing to repeat at column "+(b-1))},n=f.strToChars(a);c=n.length;while(b<c){d=n[b++];switch(d){case"\\":d=n[b++];switch(d){case"b":k.push(i.wordBoundary());break;case"B":k.push(i.nonWordBoundary());break;case"w":k.push(h.words());break;case"W":k.push(h.notWords());break;case"d":k.push(h.ints());break;case"D":k.push(h.notInts());break;case"s":k.push(h.whitespace());break;case"S":k.push(h.notWhitespace());break;default:/\d/.test(d)?k.push({type:g.REFERENCE,value:parseInt(d,10)}):k.push({type:g.CHAR,value:d.charCodeAt(0)})}break;case"^":k.push(i.begin());break;case"$":k.push(i.end());break;case"[":var o;n[b]==="^"?(o=!0,b++):o=!1;var p=f.tokenizeClass(n.slice(b),a);b+=p[1],k.push({type:g.SET,set:p[0],not:o});break;case".":k.push(h.anyChar());break;case"(":var q={type:g.GROUP,stack:[],remember:!0};d=n[b],d==="?"&&(d=n[b+1],b+=2,d==="="?q.followedBy=!0:d==="!"?q.notFollowedBy=!0:d!==":"&&f.error(a,"Invalid group, character '"+d+"' after '?' at column "+(b-1)),q.remember=!1),k.push(q),l.push(j),j=q,k=q.stack;break;case")":l.length===0&&f.error(a,"Unmatched ) at column "+(b-1)),j=l.pop(),k=j.options?j.options[j.options.length-1]:j.stack;break;case"|":j.options||(j.options=[j.stack],delete j.stack);var r=[];j.options.push(r),k=r;break;case"{":var s=/^(\d+)(,(\d+)?)?\}/.exec(n.slice(b)),t,u;s!==null?(t=parseInt(s[1],10),u=s[2]?s[3]?parseInt(s[3],10):Infinity:t,b+=s[0].length,k.push({type:g.REPETITION,min:t,max:u,value:k.pop()})):k.push({type:g.CHAR,value:123});break;case"?":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:1,value:k.pop()});break;case"+":k.length===0&&m(b),k.push({type:g.REPETITION,min:1,max:Infinity,value:k.pop()});break;case"*":k.length===0&&m(b),k.push({type:g.REPETITION,min:0,max:Infinity,value:k.pop()});break;default:k.push({type:g.CHAR,value:d.charCodeAt(0)})}}return l.length!==0&&f.error(a,"Unterminated group"),e},b.exports.types=g}),a.define("/node_modules/ret/lib/util.js",function(a,b,c,d,e){var f=a("./types"),g=a("./sets"),h="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",i={0:0,t:9,n:10,v:11,f:12,r:13};c.strToChars=function(a){var b=/(\[\\b\])|\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;return a=a.replace(b,function(a,b,c,d,e,f,g){var j=b?8:c?parseInt(c,16):d?parseInt(d,16):e?parseInt(e,8):f?h.indexOf(f):g?i[g]:undefined,k=String.fromCharCode(j);return/[\[\]{}\^$.|?*+()]/.test(k)&&(k="\\"+k),k}),a},c.tokenizeClass=function(a,b){var d=[],e=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g,h,i;while((h=e.exec(a))!=null)if(h[1])d.push(g.words());else if(h[2])d.push(g.ints());else if(h[3])d.push(g.whitespace());else if(h[4])d.push(g.notWords());else if(h[5])d.push(g.notInts());else if(h[6])d.push(g.notWhitespace());else if(h[7])d.push({type:f.RANGE,from:(h[8]||h[9]).charCodeAt(0),to:h[10].charCodeAt(0)});else{if(!(i=h[12]))return[d,e.lastIndex];d.push({type:f.CHAR,value:i.charCodeAt(0)})}c.error(b,"Unterminated character class")},c.error=function(a,b){throw new SyntaxError("Invalid regular expression: /"+a+"/: "+b)}}),a.define("/node_modules/ret/lib/types.js",function(a,b,c,d,e){b.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}}),a.define("/node_modules/ret/lib/sets.js",function(a,b,c,d,e){var f=a("./types"),g=function(){return[{type:f.RANGE,from:48,to:57}]},h=function(){return[{type:f.CHAR,value:95},{type:f.RANGE,from:97,to:122},{type:f.RANGE,from:65,to:90}].concat(g())},i=function(){return[{type:f.CHAR,value:9},{type:f.CHAR,value:10},{type:f.CHAR,value:11},{type:f.CHAR,value:12},{type:f.CHAR,value:13},{type:f.CHAR,value:32},{type:f.CHAR,value:160},{type:f.CHAR,value:5760},{type:f.CHAR,value:6158},{type:f.CHAR,value:8192},{type:f.CHAR,value:8193},{type:f.CHAR,value:8194},{type:f.CHAR,value:8195},{type:f.CHAR,value:8196},{type:f.CHAR,value:8197},{type:f.CHAR,value:8198},{type:f.CHAR,value:8199},{type:f.CHAR,value:8200},{type:f.CHAR,value:8201},{type:f.CHAR,value:8202},{type:f.CHAR,value:8232},{type:f.CHAR,value:8233},{type:f.CHAR,value:8239},{type:f.CHAR,value:8287},{type:f.CHAR,value:12288},{type:f.CHAR,value:65279}]},j=function(){return[{type:f.CHAR,value:10},{type:f.CHAR,value:13},{type:f.CHAR,value:8232},{type:f.CHAR,value:8233}]};c.words=function(){return{type:f.SET,set:h(),not:!1}},c.notWords=function(){return{type:f.SET,set:h(),not:!0}},c.ints=function(){return{type:f.SET,set:g(),not:!1}},c.notInts=function(){return{type:f.SET,set:g(),not:!0}},c.whitespace=function(){return{type:f.SET,set:i(),not:!1}},c.notWhitespace=function(){return{type:f.SET,set:i(),not:!0}},c.anyChar=function(){return{type:f.SET,set:j(),not:!0}}}),a.define("/node_modules/ret/lib/positions.js",function(a,b,c,d,e){var f=a("./types");c.wordBoundary=function(){return{type:f.POSITION,value:"b"}},c.nonWordBoundary=function(){return{type:f.POSITION,value:"B"}},c.begin=function(){return{type:f.POSITION,value:"^"}},c.end=function(){return{type:f.POSITION,value:"$"}}}),a.define("/node_modules/discontinuous-range/package.json",function(a,b,c,d,e){b.exports={main:"index.js"}}),a.define("/node_modules/discontinuous-range/index.js",function(a,b,c,d,e){function f(a,b){this.low=a,this.high=b,this.length=1+b-a}function g(a,b){if(!(this instanceof g))return new g(a,b);this.ranges=[],this.length=0,a!==undefined&&this.add(a,b)}function h(a){a.length=a.ranges.reduce(function(a,b){return a+b.length},0)}f.prototype.overlaps=function(a){return!(this.high<a.low||this.low>a.high)},f.prototype.touches=function(a){return!(this.high+1<a.low||this.low-1>a.high)},f.prototype.add=function(a){return this.touches(a)&&new f(Math.min(this.low,a.low),Math.max(this.high,a.high))},f.prototype.subtract=function(a){return this.overlaps(a)?a.low<=this.low&&a.high>=this.high?[]:a.low>this.low&&a.high<this.high?[new f(this.low,a.low-1),new f(a.high+1,this.high)]:a.low<=this.low?[new f(a.high+1,this.high)]:[new f(this.low,a.low-1)]:!1},f.prototype.toString=function(){return this.low==this.high?this.low.toString():this.low+"-"+this.high},f.prototype.clone=function(){return new f(this.low,this.high)},g.prototype.add=function(a,b){function d(a){var b=[],d=0;while(d<c.ranges.length&&!a.touches(c.ranges[d]))b.push(c.ranges[d].clone()),d++;while(d<c.ranges.length&&a.touches(c.ranges[d]))a=a.add(c.ranges[d]),d++;b.push(a);while(d<c.ranges.length)b.push(c.ranges[d].clone()),d++;c.ranges=b,h(c)}var c=this;return a instanceof g?a.ranges.forEach(d):a instanceof f?d(a):(b===undefined&&(b=a),d(new f(a,b))),this},g.prototype.subtract=function(a,b){function d(a){var b=[],d=0;while(d<c.ranges.length&&!a.overlaps(c.ranges[d]))b.push(c.ranges[d].clone()),d++;while(d<c.ranges.length&&a.overlaps(c.ranges[d]))b=b.concat(c.ranges[d].subtract(a)),d++;while(d<c.ranges.length)b.push(c.ranges[d].clone()),d++;c.ranges=b,h(c)}var c=this;return a instanceof g?a.ranges.forEach(d):a instanceof f?d(a):(b===undefined&&(b=a),d(new f(a,b))),this},g.prototype.index=function(a){var b=0;while(b<this.ranges.length&&this.ranges[b].length<=a)a-=this.ranges[b].length,b++;return b>=this.ranges.length?null:this.ranges[b].low+a},g.prototype.toString=function(){return"[ "+this.ranges.join(", ")+" ]"},g.prototype.clone=function(){return new g(this)},b.exports=g}),a.define("/randexp.js",function(a,b,c,d,e){function i(a){return a+(97<=a&&a<=122?-32:65<=a&&a<=90?32:0)}function j(){return!this.randInt(0,1)}function k(a){return a instanceof g?a.index(this.randInt(0,a.length-1)):a[this.randInt(0,a.length-1)]}function l(a,b){return a=b&&j.call(this)?i(a):a,String.fromCharCode(a)}function m(a){if(a.type===f.types.CHAR)return new g(a.value);if(a.type===f.types.RANGE)return new g(a.from,a.to);if(a.type===f.types.SET){var b=new g;for(var c=0;c<a.set.length;c++)b.add(m.call(this,a.set[c]));return a.not?this.defaultRange.clone().subtract(b):b}throw new Error("unexpandable token type: "+a.type)}function o(a,b){var c,d,e,f,g;switch(a.type){case h.ROOT:case h.GROUP:if(a.notFollowedBy)return"";a.remember&&a.groupNumber===undefined&&(a.groupNumber=b.push(null)-1),c=a.options?k.call(this,a.options):a.stack,d="";for(f=0,g=c.length;f<g;f++)d+=o.call(this,c[f],b);return a.remember&&(b[a.groupNumber]=d),d;case h.POSITION:return"";case h.SET:var i=m.call(this,a);if(!i.length)return"";return l.call(this,k.call(this,i),this.ignoreCase);case h.RANGE:return l.call(this,this.randInt(a.from,a.to),this.ignoreCase);case h.REPETITION:e=this.randInt(a.min,a.max===Infinity?a.min+this.max:a.max),d="";for(f=0;f<e;f++)d+=o.call(this,a.value,b);return d;case h.REFERENCE:return b[a.value-1]||"";case h.CHAR:return l.call(this,a.value,this.ignoreCase)}}var f=a("ret"),g=a("discontinuous-range"),h=f.types,n=b.exports=function(a,b){this.defaultRange=this.defaultRange.clone();if(a instanceof RegExp)this.ignoreCase=a.ignoreCase,this.multiline=a.multiline,typeof a.max=="number"&&(this.max=a.max),a=a.source;else{if(typeof a!="string")throw new Error("Expected a regexp or string");this.ignoreCase=b&&b.indexOf("i")!==-1,this.multiline=b&&b.indexOf("m")!==-1}this.tokens=f(a)};n.prototype.max=100,n.prototype.gen=function(){return o.call(this,this.tokens,[])},n.randexp=function(a,b){var c;return a._randexp===undefined?(c=new n(a,b),a._randexp=c):(c=a._randexp,typeof a.max=="number"&&(c.max=a.max),a.defaultRange instanceof g&&(c.defaultRange=a.defaultRange),typeof a.randInt=="function"&&(c.randInt=a.randInt)),c.gen()},n.sugar=function(){RegExp.prototype.gen=function(){return n.randexp(this)}},n.prototype.defaultRange=new g(32,126),n.prototype.randInt=function(a,b){return a+Math.floor(Math.random()*(1+b-a))}}),!function(a,b){typeof define=="function"&&typeof define.amd=="object"?define(a,function(){return b}):typeof window!="undefined"&&(window[a]=b)}("RandExp",a("/randexp.js"))}()

	var fixture = {};

	function generate (fixtureName, templateName) {
		var result = {};
		var rule = FIXTURES[fixtureName][templateName];
		for(var fieldName in rule) {
			var fieldValue = rule[fieldName];
			var generatedValue;

			if(typeof fieldValue == 'function') {
				generatedValue = fieldValue();
			} else {
				generatedValue = fieldValue;
			}

			result[fieldName] = generatedValue;
		}

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

	function uniqueRandomInt(min, max) {
		this.dataset = [];
		this.nextValueIndex = 0;

		that = this;

		function initIntegerDataset() {
			for(var i = min; i <= max - min + 1; i ++) {
				that.dataset.push(i);
			}
		}

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

		initIntegerDataset();
		shuffleDataset();
	}

	function randomValue(dataset) {
		this.dataset = dataset;

		var that = this;

		this.generateValue = function() {
			return that.dataset[Math.floor(Math.random() * (that.dataset.length))];
		};
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

	fixture.randomInt = function(min, max) {
		return new randomInt(min, max).generateValue;
	};

	fixture.randomValue = function(dataset) {
		return new randomValue(dataset).generateValue;
	};

	fixture.uniqueRandomInt = function(min, max) {
		return new uniqueRandomInt(min, max).generateValue;
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

	return fixture;
});