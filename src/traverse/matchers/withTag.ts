import enrichMatcher from "./helpers/enrichMatcher";
import Matcher from "./model/Matcher";

/**
 * Returns a matcher function that checks whether a node has a given tag.
 *
 * @param tag The tag to check. For example "p" for paragraphs.
 *
 * @return The matcher function.
 */
function withTag( tag: string ): Matcher {
	const matcher = node => node.tag === tag;
	return enrichMatcher( matcher as Matcher );
}

export default withTag;
