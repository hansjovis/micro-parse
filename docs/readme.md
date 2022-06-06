## Modules

<dl>
<dt><a href="#module_parse">parse</a></dt>
<dd><p>The parse module.</p>
</dd>
<dt><a href="#module_traverse">traverse</a></dt>
<dd><p>A module for traversing and retrieving information from
an HTML-tree.</p>
</dd>
<dt><a href="#module_traverse/matchers">traverse/matchers</a></dt>
<dd><p>Match functions.</p>
</dd>
</dl>

<a name="module_parse"></a>

## parse
The parse module.


* [parse](#module_parse)
    * [.parse(htmlString)](#module_parse.parse) ⇒ [<code>HTMLNode</code>](#module_parse.HTMLNode)
    * [.HTMLNode](#module_parse.HTMLNode)
    * [.TextNode](#module_parse.TextNode)
    * [.CommentNode](#module_parse.CommentNode)

<a name="module_parse.parse"></a>

### parse.parse(htmlString) ⇒ [<code>HTMLNode</code>](#module_parse.HTMLNode)
Parses the given HTML-string to a tree representation.

**Kind**: static method of [<code>parse</code>](#module_parse)  
**Returns**: [<code>HTMLNode</code>](#module_parse.HTMLNode) - The (root node of the) HTML tree.  

| Param | Type | Description |
| --- | --- | --- |
| htmlString | <code>string</code> | The HTML-string |

**Example**  
```js
const tree = parse( "<p class='hello'>Hello, world!</p>" );
```
Results in:
```json
{
  "type": "node",
  "tag": "root",
  "attributes": {},
  "children": [ {
    "type": "node",
    "tag": "p",
    "attributes": {
      "class": "hello"
    },
    "children": [ {
      "type": "text",
      "contents": "Hello, world!",
    } ]
  } ]
}
```
<a name="module_parse.HTMLNode"></a>

### parse.HTMLNode
A node in the HTML-tree.

**Kind**: static typedef of [<code>parse</code>](#module_parse)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>&quot;node&quot;</code> | The type of node. Always `node`. |
| tag | <code>string</code> | The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings. |
| attributes | <code>Object</code> | The attributes of the node as a key-value map of strings. |
| children | <code>Array.&lt;(module:parse.HTMLNode\|module:parse.TextNode\|module:parse.CommentNode)&gt;</code> | The children of the node. |

<a name="module_parse.TextNode"></a>

### parse.TextNode
A text leaf node in the HTML-tree.

**Kind**: static typedef of [<code>parse</code>](#module_parse)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>&quot;text&quot;</code> | The type of node. Always "text". |
| contents | <code>string</code> | The contents of the text node. |

<a name="module_parse.CommentNode"></a>

### parse.CommentNode
A comment leaf node in the HTML-tree.

**Kind**: static typedef of [<code>parse</code>](#module_parse)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>&quot;comment&quot;</code> | The type of node. Always "comment". |
| contents | <code>string</code> | The contents of the text node. |

<a name="module_traverse"></a>

## traverse
A module for traversing and retrieving information from
an HTML-tree.


* [traverse](#module_traverse)
    * [.findAll(tree, condition)](#module_traverse.findAll) ⇒ [<code>Array.&lt;HTMLNode&gt;</code>](#module_parse.HTMLNode)
    * [.innerText(node)](#module_traverse.innerText) ⇒ <code>string</code>

<a name="module_traverse.findAll"></a>

### traverse.findAll(tree, condition) ⇒ [<code>Array.&lt;HTMLNode&gt;</code>](#module_parse.HTMLNode)
Finds all nodes in the tree that satisfy the given condition
and returns those nodes in an array.

**Kind**: static method of [<code>traverse</code>](#module_traverse)  
**Returns**: [<code>Array.&lt;HTMLNode&gt;</code>](#module_parse.HTMLNode) - The array of nodes in the tree that satisfy the condition.  

| Param | Type | Description |
| --- | --- | --- |
| tree | [<code>HTMLNode</code>](#module_parse.HTMLNode) | The tree. |
| condition | <code>function</code> | The condition, should map an `HTMLNode` to either `true` or `false`. |

<a name="module_traverse.innerText"></a>

### traverse.innerText(node) ⇒ <code>string</code>
Get the inner text (the text with any markup excluded)
from the given node.

**Kind**: static method of [<code>traverse</code>](#module_traverse)  
**Returns**: <code>string</code> - The text content of the node.  

| Param | Type | Description |
| --- | --- | --- |
| node | [<code>HTMLNode</code>](#module_parse.HTMLNode) | The node. |

<a name="module_traverse/matchers"></a>

## traverse/matchers
Match functions.


* [traverse/matchers](#module_traverse/matchers)
    * [.hasAttribute(attribute)](#module_traverse/matchers.hasAttribute) ⇒ <code>function</code>
    * [.withAttribute(attribute, value)](#module_traverse/matchers.withAttribute) ⇒ <code>function</code>
    * [.withTag(tag)](#module_traverse/matchers.withTag) ⇒ <code>function</code>

<a name="module_traverse/matchers.hasAttribute"></a>

### traverse/matchers.hasAttribute(attribute) ⇒ <code>function</code>
Returns a matcher function that checks whether a node
has a given attribute.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: <code>function</code> - A function that checks whether the node has the give attribute.  

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the attribute to check. |

<a name="module_traverse/matchers.withAttribute"></a>

### traverse/matchers.withAttribute(attribute, value) ⇒ <code>function</code>
Returns a matcher function that checks whether a node has an attribute with
the given value.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: <code>function</code> - A function that returns `true` if the attribute has the given value.  

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the attribute to check. |
| value | <code>string</code> | The value this attribute should have. |

<a name="module_traverse/matchers.withTag"></a>

### traverse/matchers.withTag(tag) ⇒ <code>function</code>
Returns a matcher function that checks whether a node
has a given tag.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: <code>function</code> - The matcher function.  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag to check. For example "p" for paragraphs. |

