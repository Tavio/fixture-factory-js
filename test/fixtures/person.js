angular.module('testModule')
	.run(function(Fixture) {
			Fixture.of("person").addTemplate( 
				"valid", 
				{
					name: 'Rumbaldo',
					age: Fixture.randomInt(20, 50),
					sex: Fixture.randomValue(["Male", "Female"]),
					address: Fixture.one("address", "valid"),
					commercialAddresses: Fixture.has(2).of("address", "valid")
				}
			);
			Fixture.of("person").addTemplate("old").inherits(
				"valid", 
				{
					name: Fixture.regex(/\w{5}/),
					age: Fixture.randomInt(80, 100),
					test: Fixture.uniqueRandomInt(1, 3)
				}
			);
		}
	);