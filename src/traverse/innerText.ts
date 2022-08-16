import { InnerNode, Node, TextNode } from "../model";

/**
 * Get the inner text (the text with any markup excluded)
 * from the given node.
 *
 * @memberOf module:traverse
 *
 * @param node The node.
 *
 * @return {string} The text content of the node.
 */
function innerText( node: Node ) {
	let text = "";

	if( node instanceof InnerNode ) {
		node.children.forEach( child => {
			if ( child instanceof TextNode ) {
				text += child.contents;
			} else {
				text += innerText( child );
			}
		} );
	}

	return text;
}

export default innerText;
