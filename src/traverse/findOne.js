/**
 * Finds and returns the first node in the tree that satisfies the given
 * condition.
 *
 * @memberOf module:traverse
 *
 * @param {module:parse.HTMLNode|module:parse.TextNode|module:parse.CommentNode} tree The tree.
 * @param {module:traverse/matchers.MatchFunction} condition The condition.
 *
 * @return {module:parse.HTMLNode|module:parse.TextNode|module:parse.CommentNode|null}
 */
function findOne( tree, condition ) {
	if ( ! tree || ! tree.children ) {
		return null;
	}

	for( let child of tree.children ) {
		if ( condition( child ) ) {
			return child;
		}
		const foundNode = findOne( child, condition );
		if ( foundNode ) {
			return foundNode;
		}
	}

	return null;
}

module.exports = findOne;
