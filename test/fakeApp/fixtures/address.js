angular.module('fakeApp')
	.run(function(Fixture) {
			Fixture.of("address").addTemplate( 
				"valid", 
				{
					street: 'Avenida Paulista',
					number: Fixture.randomInt(10, 1500)
				}
			);
		}
	);