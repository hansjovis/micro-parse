import enrichMatcher from "./helpers/enrichMatcher";
import Matcher from "./model/Matcher";

/**
 * Returns a matcher function that checks whether a node
 * has a given attribute.
 *
 * @param attribute The name of the attribute to check.
 *
 * @return A function that checks whether the node has the give attribute.
 */
function hasAttribute( attribute: string ): Matcher {
	const matcher = node => node.attributes.hasOwnProperty( attribute );
	return enrichMatcher( matcher as Matcher );
}

export default hasAttribute;
