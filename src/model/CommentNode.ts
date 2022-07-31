import LeafNode from "./LeafNode";

/**
 * A comment leaf node.
 */
class CommentNode extends LeafNode {
	/**
	 * The contents of this comment node.
	 */
	contents: string = "";

	/**
	 * Creates a new comment node.
	 * @param contents The comment node's contents.
	 */
	constructor( contents: string = "" ) {
		super( "CommentNode" );
		this.contents = contents;
	}
}

export default CommentNode;

