'use strict';

describe('Fixture Factory test', function () {

	var Fixture, fixtures;

	beforeEach(function() {

		fixtures = {};
		fixtures['animal'] = {};
		fixtures['animal']['valid'] = {
			weight: 100
		};

		module('angular-fixture-factory', function($provide) {
			$provide.constant('FIXTURES', fixtures);
		});

		inject(function (_Fixture_) {
			Fixture = _Fixture_;
		})
	});

	it('should return animal fixture', function() {
		var animal = Fixture.of('animal').gimme('valid');
		expect(animal.hasOwnProperty('weight')).toBe(true);
		expect(animal.weight).toEqual(100);
	});

	it('should return an array of 5 animal fixtures', function() {
		var animals = Fixture.of('animal').gimme('valid', 5);
		expect(animals.length).toEqual(5);
		expect(animals[0].hasOwnProperty('weight')).toBe(true);
		expect(animals[0].weight).toEqual(100);
		expect(animals[1].hasOwnProperty('weight')).toBe(true);
		expect(animals[1].weight).toEqual(100);
		expect(animals[2].hasOwnProperty('weight')).toBe(true);
		expect(animals[2].weight).toEqual(100);
		expect(animals[3].hasOwnProperty('weight')).toBe(true);
		expect(animals[3].weight).toEqual(100);
		expect(animals[4].hasOwnProperty('weight')).toBe(true);
		expect(animals[4].weight).toEqual(100);
	});

	it('should add person fixture template', function() {
		
		var person = {
			name: 'Otávio',
			age: 29
		};

		Fixture.of('person').addTemplate('valid', person);
		expect(fixtures['person']['valid']).toEqual(person);
	});

	it('should add dog template as a child of the animal template', function() {
		
		var dog = {
			sound: 'bark'
		};

		Fixture.of('animal').addTemplate('dog').inherits('valid', dog);
		expect(fixtures['animal']['dog'].hasOwnProperty('weight')).toBe(true);
		expect(fixtures['animal']['dog'].hasOwnProperty('sound')).toBe(true);
		expect(fixtures['animal']['dog'].weight).toEqual(100);
		expect(fixtures['animal']['dog'].sound).toEqual('bark');
	});

	it('should generate random integers between 1 and 10', function() {
		var giraffe = {
			numberOfSpots : Fixture.randomInt(1, 10)
		};
		
		for(var i = 0; i < 10000; i++) {
			fixtures['animal']['giraffe'] = giraffe;
			var generatedGiraffe = Fixture.of('animal').gimme('giraffe');

			expect(generatedGiraffe.numberOfSpots).toBeGreaterThan(0);
			expect(generatedGiraffe.numberOfSpots).toBeLessThan(11);
		}
	});

	it('should generate a random number between 1 and 2', function() {
		var kangaroo = {
			id : Fixture.randomNumber(1, 2)
		};
		
		for(var i = 0; i < 10000; i++) {
			fixtures['animal']['kangaroo'] = kangaroo;
			var generatedKangaroo = Fixture.of('animal').gimme('kangaroo');

			expect(generatedKangaroo.id >= 1).toBe(true);
			expect(generatedKangaroo.id <= 2).toBe(true);
		}
	});

	it('should generate unique random integers between 1 and 100', function() {
		var integers = [];
		for(var i = 1; i <= 100; i++) {
			integers.push(i);
		}

		var giraffe = {
			numberOfSpots : Fixture.uniqueRandomInt(1, 100)
		};
		
		fixtures['animal']['giraffe'] = giraffe;
		var generatedGiraffes = Fixture.of('animal').gimme('giraffe', 100);
		
		generatedGiraffes.forEach(function(generatedGiraffe) {
			integers.splice(integers.indexOf(generatedGiraffe.numberOfSpots), 1);
		});

		expect(integers.length).toEqual(0);
	});	

	it('should generate a random value', function() {
		var feline = {
			type: Fixture.randomValue(['Cat', 'Tiger', 'Panther'])
		};

		fixtures['animal']['feline'] = feline;
		var generatedFeline = Fixture.of('animal').gimme('feline');

		expect(generatedFeline.type).toMatch(/Cat|Tiger|Panther/);
	});

	it('should generate unique random values', function() {
		var values = ['Savannah', 'Jungle', 'Forest', 'Desert', 'Sea'];
		
		var valid = {
			habitat : Fixture.uniqueRandomValue(['Savannah', 'Jungle', 'Forest', 'Desert', 'Sea'])
		};
		
		fixtures['animal']['valid'] = valid;
		var generatedAnimals = Fixture.of('animal').gimme('valid', 5);
		
		generatedAnimals.forEach(function(generatedAnimals) {
			values.splice(values.indexOf(generatedAnimals.habitat), 1);
		});

		expect(values.length).toEqual(0);
	});	

	it('should generate a random string matching the provided regex', function() {
		var parrot = {
			phrase: Fixture.regex(/\w{5-10}/)
		};

		fixtures['animal']['parrot'] = parrot;
		var generatedParrot = Fixture.of('animal').gimme('parrot');

		expect(generatedParrot.phrase).toMatch(/\w{5-10}/);
	});

	it('should generate a cage fixture containing an animal fixture', function() {
		var cage = {
			size: 42,
			animal: Fixture.one('animal', 'valid')
		};

		fixtures['cage'] = {};
		fixtures['cage']['small'] = cage;
		var generatedCage = Fixture.of('cage').gimme('small');

		expect(generatedCage.hasOwnProperty('animal')).toBe(true);
		expect(generatedCage.animal.weight).toEqual(100);
	});

	it('should generate a zoo fixture containing 100 animal fixtures', function() {
		var zoo = {
			animals: Fixture.has(100).of('animal', 'valid')
		};

		fixtures['zoo'] = {};
		fixtures['zoo']['valid'] = zoo;
		var generatedZoo = Fixture.of('zoo').gimme('valid');

		expect(generatedZoo.hasOwnProperty('animals')).toBe(true);
		expect(generatedZoo.animals.length).toEqual(100);
		for(var i = 0; i < 100; i++) {
			expect(generatedZoo.animals[i].weight).toEqual(100);
		}
	});

	it('should generate a party starting monday at 20:35', function() {
		var party = {
			date: Fixture.instant('mon 8:35 PM')
		};

		fixtures['party'] = {};
		fixtures['party']['bday'] = party;

		var generatedParty = Fixture.of('party').gimme('bday');
		expect(generatedParty.date.getDay()).toEqual(1);
		expect(generatedParty.date.getHours()).toEqual(20);
		expect(generatedParty.date.getMinutes()).toEqual(35);
	});

	it('should replace reference to another field with value', function() {
		var employee = {
			id: "${email}-${phone}",
		    name: "otavio",
		    company: "vivareal",
		    email: "${name}.${company}@gmail.com",
		    phone: "55555555"
		};

		fixtures['employee'] = {};
		fixtures['employee']['valid'] = employee;
		var generatedEmployee = Fixture.of('employee').gimme('valid');
		expect(generatedEmployee.id).toEqual('otavio.vivareal@gmail.com-55555555');
		expect(generatedEmployee.name).toEqual('otavio');
		expect(generatedEmployee.company).toEqual('vivareal');
		expect(generatedEmployee.email).toEqual('otavio.vivareal@gmail.com');
		expect(generatedEmployee.phone).toEqual('55555555');
	});
});