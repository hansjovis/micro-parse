const isEmptyString = require( "./isEmptyString" );

function removeEmptyTokens( tokens ) {
	return tokens.filter( Boolean ).filter( token => ! isEmptyString( token ) );
}

module.exports = removeEmptyTokens;
