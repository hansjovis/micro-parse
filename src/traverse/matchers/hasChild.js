const enrichMatcher = require( "./helpers/enrichMatcher" );

/**
 * Creates a match function that checks whether
 * a node has a child for which the given match function returns `true`.
 *
 * @memberOf module:traverse/matchers
 *
 * @param {module:traverse/matchers.MatchFunction} matcher The match function to check for each child.
 *
 * @returns {module:traverse/matchers.MatchFunction} The new match function.
 */
function hasChild( matcher ) {
	const hasChildMatcher = node => node.children.some( child => matcher( child ) );
	return enrichMatcher( hasChildMatcher );
}

module.exports = hasChild;
