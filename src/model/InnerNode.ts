import Node from "./Node";
import NodePosition from "../parse/model/NodePosition";

/**
 * An internal node in the tree.
 */
class InnerNode extends Node {
	/**
	 * The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.
	 */
	tag: string;
	/**
	 * attributes The attributes of the node as a key-value map of strings.
	 */
	attributes: Object = {};
	/**
	 * The children of the node.
	 */
	children: Node[] = [];

	/**
	 * The position of this node in the source code.
	 */
	position: NodePosition;

	/**
	 * Create a new inner node.
	 *
	 * @param tag The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.
	 * @param [attributes] This node's attributes.
	 * @param [children] The children of this node.
	 */
	constructor( tag: string, attributes: object = {}, children: Node[] = [] ) {
		super( "InnerNode" );
		this.tag = tag;
		this.attributes = attributes;
		this.children = children;
	}
}

export default InnerNode;



