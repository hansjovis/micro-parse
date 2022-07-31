import LeafNode from "./LeafNode";

/**
 * A text leaf node.
 */
class TextNode extends LeafNode {
	/**
	 * The text contents of this node.
	 */
	contents: string = "";

	/**
	 * Creates a new text node.
	 */
	constructor( contents: string = "" ) {
		super( "TextNode" );
		this.contents = contents;
	}
}

export default TextNode;
