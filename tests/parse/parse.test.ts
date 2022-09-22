import { parse } from "../../src/parse";

describe( "The parse function", () => {
	it( "should parse a tree", () => {
		const text = "<p>Hello world!</p>";

		const position = {
			startTag: {
				start: 0,
				end: 3,
			},
			endTag: {
				start: 15,
				end: 19
			}
		};

		const tree = {
			type: "InnerNode",
			tag: "p",
			attributes: {},
			position,
			children: [
				{
					type: "TextNode",
					contents: "Hello world!",
					position: {
						start: 3,
						end: 15
					}
				}
			]
		};
		expect( parse( text ) ).toEqual( tree );
	} );
} );
