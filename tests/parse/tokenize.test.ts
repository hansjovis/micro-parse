import { readFile } from "fs/promises";

import tokenize from "../../src/parse/tokenize";

describe( "The tokenizer function", () => {
	it( "tokenizes an empty string into an empty list of tokens.", () => {
		const html = "";
		expect( tokenize( html ) ).toEqual( [] );
	} );
	it( "tokenizes an HTML string into tokens", () => {
		const html = "<p class='hello'>A simple paragraph.</p>";
		expect( tokenize( html ) ).toEqual( [
			{ type: "start-tag", contents: "<p class='hello'>", tag: "p", attributes: { "class": "hello" } },
			{ type: "text", contents: "A simple paragraph." },
			{ type: "end-tag", contents: "</p>", tag: "p" },
		] );
	} );
	it( "tokenizes a nested HTML string into tokens", () => {
		const html = "<p class='hello'>A simple <strong>paragraph.</strong></p>";
		expect( tokenize( html ) ).toEqual( [
			{ type: "start-tag", contents: "<p class='hello'>", tag: "p", attributes: { "class": "hello" } },
			{ type: "text", contents: "A simple " },
			{ type: "start-tag", contents: "<strong>", tag: "strong", attributes: {} },
			{ type: "text", contents: "paragraph." },
			{ type: "end-tag", contents: "</strong>", tag: "strong" },
			{ type: "end-tag", contents: "</p>", tag: "p" },
		] );
	} );
	it( "tokenizes a HTML string with comments into tokens", () => {
		const html = "<p class='hello'>A simple <strong>paragraph.</strong><!-- A comment. --></p>";
		expect( tokenize( html ) ).toEqual( [
			{ type: "start-tag", contents: "<p class='hello'>", tag: "p", attributes: { "class": "hello" } },
			{ type: "text", contents: "A simple " },
			{ type: "start-tag", contents: "<strong>", tag: "strong", attributes: {} },
			{ type: "text", contents: "paragraph." },
			{ type: "end-tag", contents: "</strong>", tag: "strong" },
			{ type: "comment", contents: "A comment." },
			{ type: "end-tag", contents: "</p>", tag: "p" },
		] );
	} );
	it( "tokenizes a full article", async () => {
		const article = await readFile( "./texts/bbc-article.html", "utf-8" );
		const tokenString = await readFile( "./texts/bbc-article.tokens.json", "utf-8" );

		const tokens = JSON.parse( tokenString );

		await expect( tokenize( article ) ).toEqual( tokens );
	} );
} );

