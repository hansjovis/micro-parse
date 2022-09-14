import Position from "./Position";

type EndTagToken = {
	type: "end-tag",
	tag: string,
	position: Position,
	contents: string,
}

export default EndTagToken;
