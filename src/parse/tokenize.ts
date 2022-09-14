import { isEmptyString, removeEmptyTokens } from "../helpers";
import { CommentToken, EndTagToken, StartTagToken, TextToken, Token } from "./model";
import parseAttributes from "./parseAttributes";

const startTagRegex = new RegExp( "<[a-zA-Z0-9]+(?:>|.*?[^?]>)", "s" );
const endTagRegex = new RegExp( "</[a-zA-Z0-9]+(?:>|.*?[^?]>)", "s" );
const commentRegex = new RegExp( "<!--.*-->", "s" );

function getSplitRegex( regexes ) {
	const string = regexes.map( regex => `(${ regex.source })` ).join( "|" );
	return new RegExp( string, "gis" );
}

const splitRegex = getSplitRegex( [ startTagRegex, endTagRegex, commentRegex ] );

const startTagParseRegex = new RegExp( "<([a-zA-Z0-9]+)(?:>|(.*?[^?])>)", "s" );
const endTagParseRegex = new RegExp( "</([a-zA-Z0-9]+)(?:>|.*?[^?]>)", "s" );
const commentParseRegex = new RegExp( "<!--(.*)-->", "s" );

function parseStartTag( token: string, startPos: number = 0 ): StartTagToken {
	const match = token.match( startTagParseRegex );
	const tag = match[ 1 ];
	let attributes = {};

	if ( match[ 2 ] ) {
		attributes = parseAttributes( match[ 2 ] );
	}

	return {
		type: "start-tag",
		contents: token,
		position: {
			start: startPos,
			end: startPos + token.length,
		},
		tag,
		attributes,
	};
}

function parseEndTag( token: string, startPos: number = 0 ): EndTagToken {
	const match = token.match( endTagParseRegex );
	const tag = match[ 1 ];
	return {
		type: "end-tag",
		contents: token,
		position: {
			start: startPos,
			end: startPos + token.length,
		},
		tag,
	}
}

function parseComment( token: string, startPos: number = 0 ): CommentToken {
	const match = token.match( commentParseRegex );
	const contents = match[ 1 ];
	return {
		type: "comment",
		contents: contents.trim(),
		position: {
			start: startPos,
			end: startPos + token.length,
		}
	};
}

function parseToken( token: string, startPos: number = 0 ): Token {
	if ( startTagRegex.test( token ) ) {
		return parseStartTag( token, startPos );
	} else if ( endTagRegex.test( token ) ) {
		return parseEndTag( token, startPos );
	} else if ( commentRegex.test( token ) ) {
		return parseComment( token, startPos );
	}
	return {
		type: "text",
		contents: token,
		position: {
			start: startPos,
			end: startPos + token.length,
		}
	} as TextToken;
}

function tokenize( text ): Token[] {
	if ( isEmptyString( text ) ) {
		return [];
	}

	let textTokens = text.split( splitRegex );
	textTokens = removeEmptyTokens( textTokens );

	let startPos = 0;

	return textTokens.map( textToken => {
		const token = parseToken( textToken, startPos );
		startPos = token.position.end;
		return token;
	} );
}

export default tokenize;
