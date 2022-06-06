const hasAttribute = require( "../../../src/traverse/matchers/hasAttribute" );

describe( "The hasAttribute function", () => {
	it( "returns a function that checks whether a node has an attribute", () => {
		const node = {
			type: "node",
			tag: "p",
			attributes: {
				"aria-hidden": false,
			},
			children: [],
		};

		const hasAriaHidden = hasAttribute( "aria-hidden" );

		expect( hasAriaHidden( node ) ).toEqual( true );
	} );
	it( "returns a function that checks whether a node does not have an attribute", () => {
		const node = {
			type: "node",
			tag: "p",
			attributes: {},
			children: [],
		};

		const hasAriaHidden = hasAttribute( "aria-hidden" );

		expect( hasAriaHidden( node ) ).toEqual( false );
	} );
} );
