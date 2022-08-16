import { Node } from "../model";
import tokenize from "./tokenize";
import buildTree from "./buildTree";

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
 * @param htmlString The HTML-string
 *
 * @return The (root node of the) HTML tree.
 */
function parse( htmlString: string ): Node {
	const tokens = tokenize( htmlString );
	return buildTree( tokens );
}

export default parse;
