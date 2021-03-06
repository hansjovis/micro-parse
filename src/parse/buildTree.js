const { InnerNode, TextNode, CommentNode } = require( "../model" );

const selfClosingElements = [ "img", "br" ];

function isSelfClosingElement( token ) {
	return selfClosingElements.includes( token.tag );
}

/**
 * Builds an HTML-tree from a list of tokens.
 *
 * @private
 *
 * @memberOf module:parse
 *
 * @param {Array} tokens The list of tokens.
 *
 * @return {module:model.InnerNode} The (root node of the) HTML tree.
 */
function buildTree( tokens ) {
	let tree = new InnerNode( "root" );
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

	return tree;
}

module.exports = buildTree;
