const parse = require( "./parse" );

/**
 * A node in the HTML-tree.
 *
 * @typedef module:parse.HTMLNode
 *
 * @property {"node"} type The type of node. Always `node`.
 * @property {string} tag The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.
 * @property {Object} attributes The attributes of the node as a key-value map of strings.
 * @property {Array<module:parse.HTMLNode|module:parse.TextNode|module:parse.CommentNode>} children The children of the node.
 */

/**
 * A text leaf node in the HTML-tree.
 *
 * @typedef module:parse.TextNode
 *
 * @property {"text"} type The type of node. Always "text".
 * @property {string} contents The contents of the text node.
 */

/**
 * A comment leaf node in the HTML-tree.
 *
 * @typedef module:parse.CommentNode
 *
 * @property {"comment"} type The type of node. Always "comment".
 * @property {string} contents The contents of the text node.
 */

/**
 * The parse module.
 *
 * @module parse
 */

module.exports = {
	parse
}
