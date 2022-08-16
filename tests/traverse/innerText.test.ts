import { parse } from "../../src/parse";
import innerText from "../../src/traverse/innerText";

describe( "The innerText function", () => {
	it( "gets the inner text of a node", () => {
		const tree = parse(
			"<p>A simple <strong>paragraph.</strong><!-- A comment. --></p>"
		);

		expect( innerText( tree ) ).toEqual( "A simple paragraph." );
	} );
} );
