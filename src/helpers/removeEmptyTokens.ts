import isEmptyString from "./isEmptyString";

/**
 * Removes empty tokens (tokens that are falsy, like `null`, an empty string or `undefined`).
 *
 * @param tokens The tokens.
 *
 * @returns The tokens with empty tokens returned.
 */
function removeEmptyTokens( tokens: string[] ): string[] {
	return tokens.filter( Boolean ).filter( token => ! isEmptyString( token ) );
}

export default removeEmptyTokens;
