const { withTag } = require( "../../../src/traverse/matchers" );
const { parse } = require( "../../../src/parse" );
const hasChild = require( "../../../src/traverse/matchers/hasChild" );


describe( "The hasChild function", () => {
	it( "creates a match function that checks whether " +
		"a node has a given child that matches another match function",
		() => {
			const node = parse( "<div><p>Hello world!</p></div>" );
			const hasParagraphChild = hasChild( withTag( "p" ) );
			expect( hasParagraphChild( node ) ).toEqual( true );
		}
	)
} );
