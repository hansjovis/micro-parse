const { findAll } = require( "../../src/traverse" );

describe( "The findAll function", () => {
	it( "finds all nodes of a given type in a tree.", () => {
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

		expect( findAll( tree, node => node.tag === "strong" ) ).toHaveLength( 2 );
	} );
} );
