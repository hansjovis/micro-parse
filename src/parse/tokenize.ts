import { isEmptyString, normalizeWhiteSpace, removeEmptyTokens } from "../helpers";
import { Token, StartTagToken, EndTagToken, CommentToken, TextToken } from "./model";
import parseAttributes from "./parseAttributes";

const startTagRegexString = "<[a-zA-Z0-9]+(?:>|.*?[^?]>)";
const endTagRegexString = "</[a-zA-Z0-9]+(?:>|.*?[^?]>)";
const commentRegexString = "<!--.*-->";

const splitRegex = new RegExp( `(${ startTagRegexString })|(${ endTagRegexString })|(${ commentRegexString })`, "gi" );

const startTagRegex = new RegExp( startTagRegexString, "i" );
const endTagRegex = new RegExp( endTagRegexString, "i" );
const commentRegex = new RegExp( commentRegexString, "i" );

const startTagParseRegex = new RegExp( "<([a-zA-Z0-9]+)(?:>|(.*?[^?])>)", "i" );
const endTagParseRegex = new RegExp( "</([a-zA-Z0-9]+)(?:>|.*?[^?]>)", "i" );
const commentParseRegex = new RegExp( "<!--(.*)-->", "i" );

function parseStartTag( token: string ): StartTagToken {
	const match = token.match( startTagParseRegex );
	const tag = match[ 1 ];
	let attributes = {};

	if ( match[ 2 ] ) {
		attributes = parseAttributes( match[ 2 ] );
	}

	return {
		type: "start-tag",
		contents: token,
		tag,
		attributes,
	};
}

function parseEndTag( token: string ): EndTagToken {
	const match = token.match( endTagParseRegex );
	const tag = match[ 1 ];
	return {
		type: "end-tag",
		contents: token,
		tag,
	}
}

function parseComment( token: string ): CommentToken {
	const match = token.match( commentParseRegex );
	const contents = match[ 1 ];
	return {
		type: "comment",
		contents: contents.trim(),
	};
}

function parseToken( token: string ): Token {
	if ( startTagRegex.test( token ) ) {
		return parseStartTag( token );
	} else if ( endTagRegex.test( token ) ) {
		return parseEndTag( token );
	} else if ( commentRegex.test( token ) ) {
		return parseComment( token );
	}
	return {
		type: "text",
		contents: token,
	} as TextToken;
}

function tokenize( text ): Token[] {
	if ( isEmptyString( text ) ) {
		return [];
	}

	text = normalizeWhiteSpace( text );

	let textTokens = text.split( splitRegex );
	textTokens = removeEmptyTokens( textTokens );

	return textTokens.map( parseToken );
}

export default tokenize;
