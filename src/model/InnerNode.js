const Node = require( "./Node" );

/**
 * An internal node in the tree.
 *
 * @memberOf module:model
 */
class InnerNode extends Node {
	/**
	 * The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.
	 * @type {string}
	 */
	tag;
	/**
	 * attributes The attributes of the node as a key-value map of strings.
	 * @type {object}
	 */
	attributes = {};
	/**
	 * The children of the node.
	 * @type {Array<module:model.Node>}
	 */
	children = [];

	/**
	 * Create a new inner node.
	 *
	 * @param {string} tag The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.
	 * @param {object} [attributes] This node's attributes.
	 * @param {module:model.Node[]} [children] The children of this node.
	 */
	constructor( tag, attributes = {}, children = [] ) {
		super("InnerNode");
		this.tag = tag;
		this.attributes = attributes;
		this.children = children;
	}
}

module.exports = InnerNode;
