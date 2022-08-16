import withAttribute from "../../../src/traverse/matchers/withAttribute";

describe( "The withAttribute function", () => {
	it( "should return a function that checks whether a node has a given attribute", () => {
		const node = {
			type: "node",
			tag: "a",
			attributes: {
				href: "https://example.org"
			}
		}
		expect( withAttribute( "href", "https://example.org" )( node ) ).toEqual( true );
	} );
} );
