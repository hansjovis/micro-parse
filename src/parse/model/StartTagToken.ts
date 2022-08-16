import Attributes from "./Attributes";

type StartTagToken = {
	type: "start-tag",
	tag: string,
	contents: string,
	attributes: Attributes,
}

export default StartTagToken;
