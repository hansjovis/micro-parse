import Matcher from "../model/Matcher";

/**
 * Enriches the given matcher with an `and` and an `or` method,
 * allowing the user to chain matchers together.
 *
 * @param matcher
 *
 * @returns The enriched matcher.
 */
function enrichMatcher( matcher: Matcher ): Matcher {
	matcher.and = secondMatcher => node => matcher( node ) && secondMatcher( node );
	matcher.or = secondMatcher => node => matcher( node ) || secondMatcher( node );

	return matcher;
}

export default enrichMatcher;
