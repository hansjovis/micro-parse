import enrichMatcher from "./helpers/enrichMatcher";
import Matcher from "./model/Matcher";

/**
 * Creates a match function that checks whether
 * a node has a child for which the given match function returns `true`.
 *
 * @param matcher The match function to check for each child.
 *
 * @returns The new match function.
 */
function hasChild( matcher: Matcher ): Matcher {
	const hasChildMatcher = node => node.children.some( child => matcher( child ) );
	return enrichMatcher( hasChildMatcher as Matcher );
}

export default hasChild;
