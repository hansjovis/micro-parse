const { InnerNode } = require( "../../../src/model" );
const { withTag } = require( "../../../src/traverse/matchers" );
const not = require( "../../../src/traverse/matchers/not" );


describe( "The not function", () => {
	it( "inverts the result of the given match function", () => {
		const node = new InnerNode( "p" );
		const notAParagraph = not( withTag( "p" ) );
		expect( notAParagraph( node ) ).toEqual( false );
	} );
} );
