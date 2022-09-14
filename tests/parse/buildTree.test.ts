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

		const position = {
			startTag: {
				start: 0,
				end: 17,
			},
			endTag: {
				start: 36,
				end: 40,
			},
		};

		const tree = {
			type: "InnerNode",
			tag: "p",
			position,
			attributes: {
				class: "hello"
			},
			children: [
				{
					type: "TextNode",
					contents: "A simple paragraph.",
					position: {
						start: 17,
						end: 36,
					}
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
			position: {
				startTag: {
					start: 26,
					end: 34,
				},
				endTag: {
					start: 72,
					end: 76,
				}
			},
			attributes: {
				class: "hello"
			},
			children: [
				{
					type: "TextNode",
					contents: "A simple ",
					position: {
						start: 17,
						end: 26
					},
				},
				{
					type: "InnerNode",
					tag: "strong",
					attributes: {},
					position: {
						startTag: {
							start: 26,
							end: 34
						},
						endTag: {
							start: 44,
							end: 53
						}
					},
					children: [
						{
							type: "TextNode",
							contents: "paragraph.",
							position: {
								start: 34,
								end: 44
							}
						}
					]
				},
				{
					type: "CommentNode",
					contents: "A comment.",
					position: {
						start: 53,
						end: 72,
					}
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
