function normalizeWhiteSpace( text ) {
	return text.trim().replace( /[\s\n]+/g, " " );
}

module.exports = normalizeWhiteSpace;
