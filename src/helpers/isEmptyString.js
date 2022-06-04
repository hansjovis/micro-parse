/**
 * Checks if a string is empty or only contains whitespace characters.
 *
 * @private
 *
 * @param {string} string The string to check.
 *
 * @return {boolean} Whether the string is empty or not.
 */
function isEmptyString( string ) {
	return string.trim() === "" || /$[\s\n]+^/.test( string );
}

module.exports = isEmptyString;
