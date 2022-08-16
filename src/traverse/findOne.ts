import { InnerNode, Node } from "../model";
import Matcher from "./matchers/model/Matcher";

/**
 * Finds and returns the first node in the tree that satisfies the given
 * condition.
 *
 * @memberOf module:traverse
 *
 * @param tree The tree.
 * @param condition The condition.
 *
 * @return
 */
function findOne( tree: Node, condition: Matcher ) {
	if ( tree instanceof InnerNode ) {
		for( let child of tree.children ) {
			if ( condition( child ) ) {
				return child;
			}
			const foundNode = findOne( child, condition );
			if ( foundNode ) {
				return foundNode;
			}
		}
	}
	return null;
}

export default findOne;
