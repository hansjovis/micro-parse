/**
 * Enriches the given matcher with an `and` and an `or` method,
 * allowing the user to chain matchers together.
 *
 * @param {module:traverse/matchers.MatchFunction} matcher
 *
 * @returns {module:traverse/matchers.MatchFunction} The enriched matcher.
 */
function enrichMatcher( matcher ) {
	matcher.and = secondMatcher => node => matcher( node ) && secondMatcher( node );
	matcher.or = secondMatcher => node => matcher( node ) || secondMatcher( node );

	return matcher;
}

module.exports = enrichMatcher;
