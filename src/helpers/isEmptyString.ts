/**
 * Checks if a string is empty or only contains whitespace characters.
 *
 * @private
 *
 * @param text The string to check.
 *
 * @return Whether the string is empty or not.
 */
function isEmptyString( text: string ): boolean {
	return text.trim() === "" || /$[\s\n]+^/.test( text );
}

export default isEmptyString;
