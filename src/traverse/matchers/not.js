/**
 * Inverts the given match function,
 *
 * @param {module:traverse/matchers.MatchFunction} matcher
 *
 * @returns {module:traverse/matchers.MatchFunction}
 */
function not( matcher ) {
	return ( node ) => ! matcher( node );
}

module.exports = not;
