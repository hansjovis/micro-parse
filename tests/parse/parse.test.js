const { parse } = require( "../../src/parse" );

describe( "The parse function", () => {
	it( "should parse a tree", () => {
		const text = "<p>Hello world!</p>";
		const tree = {
			type: "InnerNode",
			tag: "root",
			attributes: {},
			children: [
				{
					type: "InnerNode",
					tag: "p",
					attributes: {},
					children: [
						{
							type: "TextNode",
							contents: "Hello world!"
						}
					]
				}
			]
		};
		expect( parse( text ) ).toEqual( tree );
	} );
} );
