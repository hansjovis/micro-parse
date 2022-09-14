import buildTree from "../../src/parse/buildTree";
import { readFile, writeFile } from "fs/promises";
import tokenize from "../../src/parse/tokenize";

describe( "The buildTree function", () => {
	it( "creates a tree stub, with only a root fragment node, from an empty array of tokens", () => {
		expect( buildTree( [] ) ).toEqual( {
			type: "InnerNode", tag: "#document-fragment", attributes: {}, children: [],
		} );
	} );
	it( "creates a tree from tokens", () => {
		const html = `<p class='hello'>A simple paragraph.</p>`;
		const tokens = tokenize( html );

		const tree = {
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
		};

		expect( buildTree( tokens ) ).toEqual( tree );
	} );
	it( "creates a nested tree from tokens", () => {
		const html = "<p class='hello'>A simple <strong>paragraph.</strong><!-- A comment. --></p>";
		const tokens = tokenize( html )

		const tree = {
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
		};

		expect( buildTree( tokens ) ).toEqual( tree );
	} );
	it( "can create a tree from a list of tokens from an article", async () => {
		const tokenString = await readFile( "./texts/bbc-article.tokens.json", "utf-8" );
		// const treeString = await readFile( "./texts/bbc-article.tree.json", "utf-8" );

		await writeFile( "./texts/bbc-article.tree.json", JSON.stringify( buildTree( JSON.parse( tokenString ) ), null, 2 ) );
	} );
} );
