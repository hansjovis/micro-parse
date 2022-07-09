const LeafNode = require( "./LeafNode" );

/**
 * A comment leaf node.
 *
 * @memberOf module:model
 */
class CommentNode extends LeafNode {
	/**
	 * The contents of this comment node.
	 * @type {string}
	 */
	contents = "";

	/**
	 * Creates a new comment node.
	 * @param {string} contents The comment node's contents.
	 */
	constructor( contents = "" ) {
		super( "CommentNode" );
		this.contents = contents;
	}
}

module.exports = CommentNode;
