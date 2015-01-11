Angular Fixture Factory
=======================

Angular Fixture Factory is an Angular JS service that generates fake objects for your tests. The Fixture Factory service builds fake data based on templates that you create only once, either with the help of existing native functions or by creating generator functions of your own. Just created a complex screen and want to see how it will look when populated by a lot of data? Just ask for 100 instances of the related entity's template and test away!

## Installing

	bower install angular-fixture-factory --save

To use, include the angular-fixture-factory module as a dependency of your module and make sure to load angular-fixture-factory.js (in your index.html or in the list of files in your karma.conf). Also note that bower will install date.js and randexp.js as dependencies and that you should include those as well.

## Usage

### Creating the templates

Writing the template rules:
	
	Fixture.of("Employee").addTemplate( 
		"Developer", 
		{
			name: Fixture.regex(/\w{8-10}\s/\w{8-10}/),
			email: '${name}-dev@company.com',
			age: Fixture.randomInt(25, 62),
			phone: '5555-5555',
			preferredLanguage: Fixture.randomValue(['Java', 'Python', 'Scala', 'Ruby']),
			hireDate: Fixture.instant('10 years ago');
		}
	);
	
A template can contain another template:

	Fixture.of("Department").addTemplate( 
		"Development", 
		{
			employees: Fixture.has(10).of("Employee", "Developer")
		}
	);

Inheritance is also possible:

	Fixture.of("Employee").addTemplate("Crazy").inherits(
		"Developer", 
		{
			preferredLanguage: 'Lisp'
		});

### Creating the fixtures

Generating a fixture in one of your tests:
	
	var crazyDev = Fixture.of('Employee').gimme('Crazy');

Requesting several fixtures of the same template:

	var developers = Fixture.of('Employee').gimme('Developer', 42);
	
See more examples of usage in the [tests](https://github.com/Tavio/angular-fixture-factory/tree/master/test).
