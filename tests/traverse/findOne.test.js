const findOne = require( "../../src/traverse/findOne" );
const withTag = require( "../../src/traverse/matchers/withTag" );

const tree = {
	type: "node",
	tag: "root",
	attributes: {},
	children: [
		{
			type: "node",
			tag: "p",
			attributes: {
				class: "hello"
			},
			children: [
				{
					type: "text",
					contents: "A simple "
				},
				{
					type: "node",
					tag: "strong",
					attributes: {},
					children: [
						{
							type: "text",
							contents: "paragraph."
						}
					]
				},
				{
					type: "comment",
					contents: "A comment."
				}
			]
		},
		{
			type: "node",
			tag: "p",
			attributes: {},
			children: [
				{
					type: "text",
					contents: "Another "
				},
				{
					type: "node",
					tag: "strong",
					attributes: {},
					children: [
						{
							type: "text",
							contents: "paragraph."
						}
					]
				},
			]
		}
	]
};

describe( "The findOne function", () => {
	it( "returns null if given a tree that is null", () => {
		expect( findOne( null, withTag( "p" ) ) ).toEqual( null );
	} );
	it( "returns null if no node that adheres to the condition exists in the tree", () => {
		expect( findOne( tree, withTag( "div" ) ) ).toEqual( null );
	} );
	it( "returns the node if a node that adheres to the condition exists in the tree", () => {
		const node = {
			tag: "strong",
			type: "node",
			attributes: {},
			children: [
				{
					contents: "paragraph.",
					type: "text"
				}
			],
		};
		expect( findOne( tree, withTag( "strong" ) ) ).toEqual( node );
	} );
} );
