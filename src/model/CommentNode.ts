import LeafNode from "./LeafNode";
import Position from "../parse/model/Position";

/**
 * A comment leaf node.
 */
class CommentNode extends LeafNode {
	/**
	 * The contents of this comment node.
	 */
	contents: string = "";

	/**
	 * The position of this comment in the source code.
	 */
	position: Position;

	/**
	 * Creates a new comment node.
	 * @param [contents] The comment node's contents.
	 * @param [position] The position of this comment in the source code.
	 */
	constructor( contents: string = "", position: Position = { start: 0, end: contents.length } ) {
		super( "CommentNode" );
		this.contents = contents;
		this.position = position;
	}
}

export default CommentNode;

