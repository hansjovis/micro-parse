/**
 * Returns a matcher function that checks whether a node
 * has a given tag.
 *
 * @memberOf module:traverse/matchers
 *
 * @param {string} tag The tag to check. For example "p" for paragraphs.
 *
 * @return {function(module:parse.HTMLNode): boolean} The matcher function.
 */
function withTag( tag ) {
	return node => node.tag === tag;
}

module.exports = withTag;
