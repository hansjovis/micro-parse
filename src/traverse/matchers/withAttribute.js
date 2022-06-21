/**
 * Returns a matcher function that checks whether a node has an attribute with
 * the given value.
 *
 * @memberOf module:traverse/matchers
 *
 * @param {string} attribute The name of the attribute to check.
 * @param {string} value The value this attribute should have.
 *
 * @return {module:traverse/matchers.MatchFunction} A function that returns `true` if the attribute has the given value.
 */
function withAttribute( attribute, value ) {
	return node => node.attributes[ attribute ] === value;
}

module.exports = withAttribute;
