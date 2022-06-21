/**
 * Returns a matcher function that checks whether a node
 * has a given attribute.
 *
 * @memberOf module:traverse/matchers
 *
 * @param {string} attribute The name of the attribute to check.
 *
 * @return {module:traverse/matchers.MatchFunction} A function that checks whether the node has the give attribute.
 */
function hasAttribute( attribute ) {
	return node => node.attributes.hasOwnProperty( attribute );
}

module.exports = hasAttribute;
