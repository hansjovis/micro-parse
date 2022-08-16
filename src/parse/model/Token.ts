import StartTagToken from "./StartTagToken";
import EndTagToken from "./EndTagToken";
import CommentToken from "./CommentToken";
import TextToken from "./TextToken";

type Token = StartTagToken | EndTagToken | CommentToken | TextToken;

export default Token;
