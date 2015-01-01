'use strict';

describe('Test module', function () {

  var Fixture;
  
  beforeEach(function() {
  	module('testModule');
  	inject(function (_Fixture_) {
	    Fixture = _Fixture_;
	  })
  });

  it('should create fixtures', function() {
	  var person = Fixture.of("person").gimme("valid");
	  var people = Fixture.of("person").gimme("valid", 3);
	  var oldPerson = Fixture.of("person").gimme("old", 3);
	  console.log(person);
	  console.log(people);
	  console.log(oldPerson);
  });
});