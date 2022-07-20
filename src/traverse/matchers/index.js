const withTag = require( "./withTag" );
const withAttribute = require( "./withAttribute" );
const hasAttribute = require( "./hasAttribute" );
const not = require( "./not" );

/**
 * A match function that maps a node in the tree to either `true` or `false`.
 *
 * @callback module:traverse/matchers.MatchFunction
 *
 * @param {module:model.Node} node The node to check.
 *
 * @return {Boolean} Whether the node matches according to this match function.
 */

/**
 * Match functions.
 *
 * @module traverse/matchers
 */

module.exports = {
	withTag,
	withAttribute,
	hasAttribute,
	not,
};
