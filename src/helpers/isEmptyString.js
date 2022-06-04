function isEmptyString( text ) {
	return text.trim() === "" || /$[\s\n]+^/.test( text );
}

module.exports = isEmptyString;
