/**
 * Replaces all whitespace with a single space.
 *
 * @private
 *
 * @param text The text to normalize.
 *
 * @returns The text with the whitespace replaced with a single space.
 */
function normalizeWhiteSpace( text: string ): string {
	return text.trim().replace( /[\s\n]+/g, " " );
}

export default normalizeWhiteSpace;
