import { Node } from "../model";

import { InnerNode, TextNode, CommentNode } from "../model";
import Token from "./model/Token";

const selfClosingElements = [ "img", "br" ];

function isSelfClosingElement( token: any ): boolean {
	return selfClosingElements.includes( token.tag );
}

/**
 * Builds an HTML-tree from a list of tokens.
 *
 * @private
 *
 * @memberOf module:parse
 *
 * @param tokens The list of tokens.
 *
 * @return The (root node of the) HTML tree.
 */
function buildTree( tokens: Token[] ): Node {
	let tree = new InnerNode( "#document-fragment" );
	if ( tokens.length === 0 ) {
		return tree;
	}

	const stack = [ tree ];
	let currentNode = tree;

	while ( tokens.length > 1 ) {
		let token = tokens.shift();
		switch ( token.type ) {
			case "start-tag": {
				const newNode = new InnerNode( token.tag, token.attributes );
				currentNode.children.push( newNode );
				if ( ! isSelfClosingElement( token ) ) {
					currentNode = newNode;
					stack.push( currentNode );
				}
				break;
			}
			case "end-tag": {
				if ( token.tag === currentNode.tag ) {
					stack.pop();
					currentNode = stack[ stack.length - 1 ];
				}
				break;
			}
			case "comment": {
				currentNode.children.push( new CommentNode( token.contents ) );
				break;
			}
			default: {
				currentNode.children.push( new TextNode( token.contents ) );
			}
		}
	}

	// If the root node has only one child, return that node as the root instead.
	if ( tree.children && tree.children.length === 1 ) {
		return tree.children[ 0 ];
	}

	return tree;
}

export default buildTree;
