import findAll from "../../src/traverse/findAll";
import { parse } from "../../src/parse";
import { withTag, withAttribute } from "../../src/traverse/matchers";

describe( "The findAll function", () => {
	it( "finds all nodes of a given type in a tree.", () => {
		const html = `
			<div>
				<p>
					<strong class='large'>Hello</strong>
				</p>
				<strong class='large'>World!</strong>
			</div>
		`;
		const tree = parse( html );

		expect(
			findAll( tree, withTag( "strong" ).and( withAttribute( "class", "large" ) ) )
		).toHaveLength( 2 );
	} );
} );
