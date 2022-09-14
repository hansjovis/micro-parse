import LeafNode from "./LeafNode";
import Position from "../parse/model/Position";

/**
 * A text leaf node.
 */
class TextNode extends LeafNode {
	/**
	 * The text contents of this node.
	 */
	contents: string = "";

	/**
	 * The position of this text in the source code.
	 */
	position: Position;

	/**
	 * Creates a new text node.
	 * @param contents The content of the text.
	 * @param [position] The position of this text in the source code.
	 */
	constructor( contents: string = "", position: Position = { start: 0, end: contents.length } ) {
		super( "TextNode" );
		this.contents = contents;
		this.position = position;
	}
}

export default TextNode;
