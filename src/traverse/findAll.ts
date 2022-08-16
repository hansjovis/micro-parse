import { InnerNode, Node } from "../model";
import Matcher from "./matchers/model/Matcher";

/**
 * Finds all nodes in the tree that satisfy the given condition
 * and returns those nodes in an array.
 *
 * @memberOf module:traverse
 *
 * @param tree The tree.
 * @param condition The condition, should map an `HTMLNode` to either `true` or `false`.
 *
 * @return The array of nodes in the tree that satisfy the condition.
 */
function findAll( tree: Node, condition: Matcher ) {
	const nodes = [];

	if ( tree instanceof InnerNode ) {
		tree.children.forEach( child => {
			if ( condition( child ) ) {
				nodes.push( child );
			} else {
				nodes.push( ...findAll( child, condition ) );
			}
		} );
	}
	return nodes;
}

export default findAll;
