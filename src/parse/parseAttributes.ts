import { isEmptyString, removeEmptyTokens, normalizeWhiteSpace } from "../helpers";
import Attributes from "./model/Attributes";

const keyValueRegexString = "[\\w-]+=(?<quote>[\"']).*?\\k<quote>";
const keyRegexString = "[\\w-]+";

const keyValueRegex = new RegExp( keyValueRegexString, "i" );
const keyRegex = new RegExp( keyRegexString, "i" );

const splitRegex = new RegExp( `(${ keyValueRegexString })|(${ keyRegexString })`, "gi" );

const keyValueParseRegex = /([\w-]+)=(["'])(.*?)\2/i;

function parseKeyValueAttribute( token: string ): Attributes {
	const match = token.match( keyValueParseRegex );

	const key = match[ 1 ];
	const value = match [ 3 ];

	return {
		[key]: value,
	};
}

function parseKeyAttribute( token: string ): Attributes {
	return {
		[token]: true,
	};
}

function parseAttribute( token: string ): Attributes {
	if ( keyValueRegex.test( token ) ) {
		return parseKeyValueAttribute( token );
	} else if ( keyRegex.test( token ) ) {
		return parseKeyAttribute( token );
	}
	return {};
}

function parseAttributes( string: string ): Attributes {
	if ( isEmptyString( string ) ) {
		return {};
	}

	let tokens = string.split( splitRegex );
	tokens = removeEmptyTokens( tokens );
	tokens = tokens.map( normalizeWhiteSpace );

	let attributes = {};

	tokens.forEach( token => {
		attributes = Object.assign( attributes, parseAttribute( token ) );
	} );

	return attributes;
}

export default parseAttributes;
