/**
 * Finds all nodes in the tree that satisfy the given condition
 * and returns those nodes in an array.
 *
 * @memberOf module:traverse
 *
 * @param {module:parse.HTMLNode} tree The tree.
 * @param {module:traverse/matchers.MatchFunction} condition The condition, should map an `HTMLNode` to either `true` or `false`.
 *
 * @return {module:parse.HTMLNode[]} The array of nodes in the tree that satisfy the condition.
 */
function findAll( tree, condition ) {
	const nodes = [];
	if ( ! tree.children ) {
		return nodes;
	}

	tree.children.forEach( child => {
		if ( condition( child ) ) {
			nodes.push( child );
		} else {
			nodes.push( ...findAll( child, condition ) );
		}
	} );
	return nodes;
}

module.exports = findAll;
