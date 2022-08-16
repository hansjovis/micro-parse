import { parse } from "../../src/parse";

import findOne from "../../src/traverse/findOne";
import withTag from "../../src/traverse/matchers/withTag";

describe( "The findOne function", () => {
	const html = `
		<p class="hello">
			A simple <strong>paragraph.</strong><!-- A comment. -->
		</p>
		<p>
			Another <strong>paragraph.</strong>
		</p>
	`;

	const tree = parse( html );

	it( "returns null if given a tree that is null", () => {
		expect( findOne( null, withTag( "p" ) ) ).toEqual( null );
	} );
	it( "returns null if no node that adheres to the condition exists in the tree", () => {
		expect( findOne( tree, withTag( "div" ) ) ).toEqual( null );
	} );
	it( "returns the node if a node that adheres to the condition exists in the tree", () => {
		const node = {
			tag: "strong",
			type: "InnerNode",
			attributes: {},
			children: [
				{
					contents: "paragraph.",
					type: "TextNode"
				}
			],
		};
		expect( findOne( tree, withTag( "strong" ) ) ).toEqual( node );
	} );
} );
