import { InnerNode } from "../../../src/model";
import { withTag } from "../../../src/traverse/matchers";
import not from "../../../src/traverse/matchers/not";


describe( "The not function", () => {
	it( "inverts the result of the given match function", () => {
		const node = new InnerNode( "p" );
		const notAParagraph = not( withTag( "p" ) );
		expect( notAParagraph( node ) ).toEqual( false );
	} );
} );
