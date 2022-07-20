/**
 * Get the inner text (the text with any markup excluded)
 * from the given node.
 *
 * @memberOf module:traverse
 *
 * @param {module:parse.Node} node The node.
 *
 * @return {string} The text content of the node.
 */
function innerText( node ) {
	let text = "";

	if ( ! node.children ) {
		return text;
	}

	node.children.forEach( child => {
		if ( child.type === "text" ) {
			text += child.contents;
		} else {
			text += innerText( child );
		}
	} );

	return text;
}

module.exports = innerText;
