const tokenize = require( "./tokenize" );
const buildTree = require( "./buildTree" );

/**
 * Parses the given HTML-string to a tree representation.
 *
 * @memberOf module:parse
 *
 * @example
 * ```js
 * const tree = parse( "<p class='hello'>Hello, world!</p>" );
 * ```
 * Results in:
 * ```json
 * {
 *   "type": "node",
 *   "tag": "root",
 *   "attributes": {},
 *   "children": [ {
 *     "type": "node",
 *     "tag": "p",
 *     "attributes": {
 *       "class": "hello"
 *     },
 *     "children": [ {
 *       "type": "text",
 *       "contents": "Hello, world!",
 *     } ]
 *   } ]
 * }
 * ```
 *
 * @param {string} htmlString The HTML-string
 *
 * @return {module:model.InnerNode} The (root node of the) HTML tree.
 */
function parse( htmlString ) {
	const tokens = tokenize( htmlString );
	return buildTree( tokens );
}

module.exports = parse;
