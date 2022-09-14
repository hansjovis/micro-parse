import { readFile, writeFile } from "fs/promises";

import tokenize from "../../src/parse/tokenize";

describe( "The tokenizer function", () => {
	it( "tokenizes an empty string into an empty list of tokens.", () => {
		const html = "";
		expect( tokenize( html ) ).toEqual( [] );
	} );
	it( "tokenizes an HTML string into tokens", () => {
		const html = `<p class='hello'>A simple paragraph.</p>`;
		expect( tokenize( html ) ).toEqual( [
			{
				type: "start-tag",
				contents: "<p class='hello'>",
				tag: "p",
				attributes: { "class": "hello" },
				position: { start: 0, end: 17 }
			},
			{ type: "text", contents: "A simple paragraph.", position: { start: 17, end: 36 } },
			{ type: "end-tag", contents: "</p>", tag: "p", position: { start: 36, end: 40 } },
		] );
	} );
	it( "tokenizes a nested HTML string into tokens", () => {
		const html = "<p class='hello'>A simple <strong>paragraph.</strong></p>";

		expect( tokenize( html ) ).toEqual( [
			{
				type: "start-tag",
				contents: "<p class='hello'>",
				tag: "p",
				attributes: { "class": "hello" },
				position: { start: 0, end: 17 }
			},
			{ type: "text", contents: "A simple ", position: { start: 17, end: 26 } },
			{
				type: "start-tag",
				contents: "<strong>",
				tag: "strong",
				attributes: {},
				position: { start: 26, end: 34 }
			},
			{ type: "text", contents: "paragraph.", position: { start: 34, end: 44 } },
			{ type: "end-tag", contents: "</strong>", tag: "strong", position: { start: 44, end: 53 } },
			{ type: "end-tag", contents: "</p>", tag: "p", position: { start: 53, end: 57 } },
		] );
	} );
	it( "tokenizes a HTML string with comments into tokens", () => {
		const html = "<p class='hello'>A simple <strong>paragraph.</strong><!-- A comment. --></p>";
		expect( tokenize( html ) ).toEqual( [
			{
				type: "start-tag",
				contents: "<p class='hello'>",
				tag: "p",
				attributes: { "class": "hello" },
				position: { start: 0, end: 17 }
			},
			{ type: "text", contents: "A simple ", position: { start: 17, end: 26 } },
			{
				type: "start-tag",
				contents: "<strong>",
				tag: "strong",
				attributes: {},
				position: { start: 26, end: 34 }
			},
			{ type: "text", contents: "paragraph.", position: { start: 34, end: 44 } },
			{ type: "end-tag", contents: "</strong>", tag: "strong", position: { start: 44, end: 53 } },
			{ type: "comment", contents: "A comment.", position: { start: 53, end: 72 } },
			{ type: "end-tag", contents: "</p>", tag: "p", position: { start: 72, end: 76 } },
		] );
	} );
	it( "tokenizes a full article", async () => {
		const article = await readFile( "./texts/bbc-article.html", "utf-8" );
		// const tokenString = await readFile( "./texts/bbc-article.tokens.json", "utf-8" );

		const tokens = tokenize( article );

		await writeFile( "./texts/bbc-article.tokens.json", JSON.stringify( tokens, null, 2 ) );
	} );
} );

