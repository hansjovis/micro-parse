import Matcher from "./model/Matcher";
import enrichMatcher from "./helpers/enrichMatcher";

/**
 * Inverts the given matcher.
 *
 * E.g. when the original matcher returns `false`, the inverted matcher returns `true`
 * and the other way around.
 *
 * @param matcher The matcher to invert.
 *
 * @returns The inverted matcher function.
 */
function not( matcher: Matcher ): Matcher {
	return enrichMatcher( ( node => ! matcher( node ) ) as Matcher );
}

export default not;
