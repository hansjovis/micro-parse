import Position from "./Position";

type CommentToken = {
	type: "comment",
	contents: string,
	position: Position,
}

export default CommentToken;
