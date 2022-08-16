import isEmptyString from "../../src/helpers/isEmptyString";

describe( "The isEmptyString function", () => {
	it( "returns true when given an empty string", () => {
		expect( isEmptyString( "" ) ).toBe( true );
	} );
	it( "returns false when given a non-empty string", () => {
		expect( isEmptyString( "not an empty string" ) ).toBe( false );
	} );
	it( "returns true when given a string with only whitespace", () => {
		expect( isEmptyString( " 	  \n" ) ).toBe( true );
	} );
} );
