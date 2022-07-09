/**
 * @memberOf module:model
 */
class Node {
	/**
	 * The type of node.
	 * @type {string}
	 */
	type = "InnerNode";

	constructor( type ) {
		this.type = type;
	}
}

module.exports = Node;
