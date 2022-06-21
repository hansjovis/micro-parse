const { parse } = require( "../../src/parse" );

describe( "The parse function", () => {
	it( "should parse a tree", () => {
		const text = "<p>Hello world!</p>";
		const tree = {
			type: "node",
			tag: "root",
			attributes: {},
			children: [
				{
					type: "node",
					tag: "p",
					attributes: {},
					children: [
						{
							type: "text",
							contents: "Hello world!"
						}
					]
				}
			]
		};
		expect( parse( text ) ).toEqual( tree );
	} );
} );
