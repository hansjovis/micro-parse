import CommentNode from "../../src/model/CommentNode";

describe( "CommentNode", () => {
	it( 'should create a new comment node using defaults', () => {
		const comment = new CommentNode();

		expect( comment.type ).toEqual( "CommentNode" );
		expect( comment.contents ).toEqual( "" );
		expect( comment.position ).toEqual( { start: 0, end: 0 } );
	} );
	it( "should create a new comment node using the provided text", () => {
		const comment = new CommentNode( "Hello world!" );

		expect( comment.type ).toEqual( "CommentNode" );
		expect( comment.contents ).toEqual( "Hello world!" );
		expect( comment.position ).toEqual( { start: 0, end: 12 } );
	} );
	it( "should create a new comment node using the provided text and position", () => {
		const comment = new CommentNode( "Hello world!", { start: 12, end: 24 } );

		expect( comment.type ).toEqual( "CommentNode" );
		expect( comment.contents ).toEqual( "Hello world!" );
		expect( comment.position ).toEqual( { start: 12, end: 24 } );
	} );
} );
