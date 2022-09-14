import Position from "./Position";

type TextToken = {
	type: "text",
	contents: string,
	position: Position,
}

export default TextToken;
