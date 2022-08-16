import enrichMatcher from "./helpers/enrichMatcher";
import Matcher from "./model/Matcher";

/**
 * Returns a matcher function that checks whether a node has an attribute with
 * the given value.
 *
 * @param attribute The name of the attribute to check.
 * @param value The value this attribute should have.
 *
 * @return A function that returns `true` if a node has an attribute with the given value.
 */
function withAttribute( attribute: string, value: any ): Matcher {
	const matcher = node => node.attributes[ attribute ] === value;
	return enrichMatcher( matcher );
}

export default withAttribute;
