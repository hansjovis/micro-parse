import parseAttributes from "../../src/parse/parseAttributes";

describe( "The parseAttributes function", () => {
	it( "returns an empty object when parsing a string with no attributes.", () => {
		expect( parseAttributes( "\n   " ) ).toEqual( {} );
	} );
	it( "parses key-value and key-only attributes.", () => {
		const attributesString = "  class='card'  hidden ";
		const attributes = {
			"class": "card",
			hidden: true,
		};
		expect( parseAttributes( attributesString ) ).toEqual( attributes );
	} );
	it( "parses some more key-value and key-only attributes", () => {
		const string = " class=\"dotcom-ad-text\" tabindex=\"-1\" hidden href=\"https://www.bbc.com/usingthebbc/cookies/\"";
		const attributes = {
			"class": "dotcom-ad-text",
			tabindex: "-1",
			href: "https://www.bbc.com/usingthebbc/cookies/",
			hidden: true,
		};
		expect( parseAttributes( string ) ).toEqual( attributes );
	} );
	it( "parses an attribute with a dash in the middle of the key", () => {
		const string = "   data-key='abcd' data-display   ";
		const attributes = {
			"data-key": "abcd",
			"data-display": true,
		};
		expect( parseAttributes( string ) ).toEqual( attributes );
	} );
	it( "parses a string value with a ' in the middle", () => {
		const string = "   alt=\"We're tough, but we are holding on.\"";
		const attributes = {
			alt: "We're tough, but we are holding on.",
		};
		expect( parseAttributes( string ) ).toEqual( attributes );
	} );
} );
