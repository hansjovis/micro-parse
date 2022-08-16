import { Node } from "../../../model";

/**
 * A function that maps a node to either `true` or `false.
 *
 * Has two methods to chain other Matchers together: `and` and `or`.
 */
type Matcher = ( ( node: Node ) => boolean ) & {
	and?: ( matcher: Matcher ) => ( node: Node ) => boolean
	or?: ( matcher: Matcher ) => ( node: Node ) => boolean
};

export default Matcher;
