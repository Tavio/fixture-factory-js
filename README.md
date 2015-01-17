Fixture Factory JS
==================

Fixture Factory JS is a Javascript library that generates fake objects for your tests. Fixture Factory builds fake data based on templates that you create only once, either with the help of existing native functions or by creating generator functions of your own. Just created a complex screen and want to see how it will look when populated by a lot of data? Just ask for 100 instances of the related entity's template and test away!

## Installing

	bower install fixture-factory --save

Note that bower will install [date.js](https://github.com/abritinthebay/datejs/) and [randexp.js](https://github.com/fent/randexp.js) as dependencies, so you should include these dependencies in your application.

## Usage

### Creating the templates

Writing the template rules:
	
	Fixture.of("Employee").addTemplate( 
		"Developer", 
		{
			name: Fixture.firstName(),
			lastName: Fixture.lastName(),
			email: '${name}-dev@company.com',
			age: Fixture.randomInt(25, 62),
			phone: '5555-5555',
			preferredLanguage: Fixture.randomValue(['Java', 'Python', 'Scala', 'Ruby']),
			hireDate: Fixture.instant('10 years ago'),
			company: Fixture.regex(/\w{8-10}\s/\w{8-10}/)
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
	
See more usage examples in the [tests](https://github.com/Tavio/fixture-factory-js/tree/master/test).
