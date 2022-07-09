const LeafNode = require( "./LeafNode" );

/**
 * A text leaf node.
 *
 * @memberOf module:model
 */
class TextNode extends LeafNode {
	/**
	 * The text contents of this node.
	 * @type {string}
	 */
	contents = "";

	/**
	 * Creates a new text node.
	 * @param {string} contents The text contents.
	 */
	constructor( contents = "" ) {
		super( "TextNode" );
		this.contents = contents;
	}
}

module.exports = TextNode;
