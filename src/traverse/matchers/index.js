const withTag = require( "./withTag" );
const withAttribute = require( "./withAttribute" );
const hasAttribute = require( "./hasAttribute" );

/**
 * A match function that maps a node in the tree to either `true` or `false`.
 *
 * @callback module:traverse/matchers.MatchFunction
 *
 * @param {module:parse.HTMLNode|module:parse.TextNode|module:parse.CommentNode|null} node The node to check.
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
};
