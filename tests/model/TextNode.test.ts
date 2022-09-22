import TextNode from "../../src/model/TextNode";

describe( "TextNode", () => {
	it( 'should create a new text node using defaults', () => {
		const text = new TextNode();

		expect( text.type ).toEqual( "TextNode" );
		expect( text.contents ).toEqual( "" );
		expect( text.position ).toEqual( { start: 0, end: 0 } );
	} );
	it( "should create a new text node using the provided text", () => {
		const text = new TextNode( "Hello world!" );

		expect( text.type ).toEqual( "TextNode" );
		expect( text.contents ).toEqual( "Hello world!" );
		expect( text.position ).toEqual( { start: 0, end: 12 } );
	} );
	it( "should create a new text node using the provided text and position", () => {
		const text = new TextNode( "Hello world!", { start: 12, end: 24 } );

		expect( text.type ).toEqual( "TextNode" );
		expect( text.contents ).toEqual( "Hello world!" );
		expect( text.position ).toEqual( { start: 12, end: 24 } );
	} );
} );
