import Attributes from "./Attributes";
import Position from "./Position";

type StartTagToken = {
	type: "start-tag",
	tag: string,
	contents: string,
	position: Position,
	attributes: Attributes,
}

export default StartTagToken;
