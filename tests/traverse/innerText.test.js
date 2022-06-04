const innerText = require( "../../src/traverse/innerText" );

describe( "The innerText function", () => {
	it( "gets the inner text of a node", () => {
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
				}
			]
		};

		expect( innerText( tree ) ).toEqual( "A simple paragraph." );
	} );
} );
