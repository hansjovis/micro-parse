import enrichMatcher from "../../../src/traverse/matchers/helpers/enrichMatcher";
import { InnerNode } from "../../../src/model";
import Matcher from "../../../src/traverse/matchers/model/Matcher";

describe( "The enrichMatcher function", () => {
	it( "Enriches a matcher function", () => {
		let hasChildren: Matcher = node => {
			if ( node instanceof InnerNode ) {
				return node.children && node.children.length > 0;
			}
			return false;
		}
		const isParagraph = node => node.tag === "p";

		const node = new InnerNode( "p" );

		// Enrich the matcher with `and` and `or` methods, to allow chaining.
		hasChildren = enrichMatcher( hasChildren );

		expect( hasChildren.and ).toBeDefined();
		// Node is a paragraph, but does not have children, so expect `false`.
		expect( hasChildren.and( isParagraph )( node ) ).toBe( false );

		expect( hasChildren.or ).toBeDefined();
		// Node is a paragraph, so expect `true`.
		expect( hasChildren.or( isParagraph )( node ) ).toBe( true );
	} );
} );
