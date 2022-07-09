const buildTree = require( "../../src/parse/buildTree" );
const fs = require( "fs/promises" );

describe( "The buildTree function", () => {
	it( "creates a tree stub, with only a root node, from an empty array of tokens", () => {
		expect( buildTree( [] ) ).toEqual( {
			type: "InnerNode", tag: "root", attributes: {}, children: [],
		} );
	} );
	it( "creates a tree from tokens", () => {
		const tokens = [
			{ type: "start-tag", contents: "<p class='hello'>", tag: "p", attributes: { "class": "hello" } },
			{ type: "text", contents: "A simple paragraph." },
			{ type: "end-tag", contents: "</p>", tag: "p" },
		];

		const tree = {
			type: "InnerNode",
			tag: "root",
			attributes: {},
			children: [
				{
					type: "InnerNode",
					tag: "p",
					attributes: {
						class: "hello"
					},
					children: [
						{
							type: "TextNode",
							contents: "A simple paragraph.",
						}
					]
				}
			]
		};

		expect( buildTree( tokens ) ).toEqual( tree );
	} );
	it( "creates a nested tree from tokens", () => {
		const tokens = [
			{ type: "start-tag", contents: "<p class='hello'>", tag: "p", attributes: { "class": "hello" } },
			{ type: "text", contents: "A simple " },
			{ type: "start-tag", contents: "<strong>", tag: "strong", attributes: {} },
			{ type: "text", contents: "paragraph." },
			{ type: "end-tag", contents: "</strong>", tag: "strong" },
			{ type: "comment", contents: "A comment." },
			{ type: "end-tag", contents: "</p>", tag: "p" },
		];

		const tree = {
			type: "InnerNode",
			tag: "root",
			attributes: {},
			children: [
				{
					type: "InnerNode",
					tag: "p",
					attributes: {
						class: "hello"
					},
					children: [
						{
							type: "TextNode",
							contents: "A simple "
						},
						{
							type: "InnerNode",
							tag: "strong",
							attributes: {},
							children: [
								{
									type: "TextNode",
									contents: "paragraph."
								}
							]
						},
						{
							type: "CommentNode",
							contents: "A comment."
						}
					]
				}
			]
		};

		expect( buildTree( tokens) ).toEqual( tree );
	} );
	it( "can create a tree from a list of tokens from an article", async () => {
		const tokenString = await fs.readFile( "./texts/bbc-article.tokens.json", "utf-8" );
		const treeString = await fs.readFile( "./texts/bbc-article.tree.json", "utf-8" );

		const tokens = JSON.parse( tokenString );
		const tree = JSON.parse( treeString );

		await expect( buildTree( tokens ) ).toEqual( tree );
	} );
} );
