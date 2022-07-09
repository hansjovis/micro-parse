## Modules

<dl>
<dt><a href="#module_model">model</a></dt>
<dd><p>This module contains the building blocks of an HTML tree.</p>
</dd>
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

<a name="module_model"></a>

## model
This module contains the building blocks of an HTML tree.


* [model](#module_model)
    * [.CommentNode](#module_model.CommentNode)
        * [new CommentNode(contents)](#new_module_model.CommentNode_new)
        * [.contents](#module_model.CommentNode+contents) : <code>string</code>
    * [.InnerNode](#module_model.InnerNode)
        * [new InnerNode(tag, [attributes], [children])](#new_module_model.InnerNode_new)
        * [.tag](#module_model.InnerNode+tag) : <code>string</code>
        * [.attributes](#module_model.InnerNode+attributes) : <code>object</code>
        * [.children](#module_model.InnerNode+children) : [<code>Array.&lt;Node&gt;</code>](#module_model.Node)
    * [.LeafNode](#module_model.LeafNode)
    * [.Node](#module_model.Node)
        * [.type](#module_model.Node+type) : <code>string</code>
    * [.TextNode](#module_model.TextNode)
        * [new TextNode(contents)](#new_module_model.TextNode_new)
        * [.contents](#module_model.TextNode+contents) : <code>string</code>

<a name="module_model.CommentNode"></a>

### model.CommentNode
A comment leaf node.

**Kind**: static class of [<code>model</code>](#module_model)  

* [.CommentNode](#module_model.CommentNode)
    * [new CommentNode(contents)](#new_module_model.CommentNode_new)
    * [.contents](#module_model.CommentNode+contents) : <code>string</code>

<a name="new_module_model.CommentNode_new"></a>

#### new CommentNode(contents)
Creates a new comment node.


| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | The comment node's contents. |

<a name="module_model.CommentNode+contents"></a>

#### commentNode.contents : <code>string</code>
The contents of this comment node.

**Kind**: instance property of [<code>CommentNode</code>](#module_model.CommentNode)  
<a name="module_model.InnerNode"></a>

### model.InnerNode
An internal node in the tree.

**Kind**: static class of [<code>model</code>](#module_model)  

* [.InnerNode](#module_model.InnerNode)
    * [new InnerNode(tag, [attributes], [children])](#new_module_model.InnerNode_new)
    * [.tag](#module_model.InnerNode+tag) : <code>string</code>
    * [.attributes](#module_model.InnerNode+attributes) : <code>object</code>
    * [.children](#module_model.InnerNode+children) : [<code>Array.&lt;Node&gt;</code>](#module_model.Node)

<a name="new_module_model.InnerNode_new"></a>

#### new InnerNode(tag, [attributes], [children])
Create a new inner node.


| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings. |
| [attributes] | <code>object</code> | This node's attributes. |
| [children] | [<code>Array.&lt;Node&gt;</code>](#module_model.Node) | The children of this node. |

<a name="module_model.InnerNode+tag"></a>

#### innerNode.tag : <code>string</code>
The tag of the node, e.g. `p` for paragraphs or `h2` for level 2 headings.

**Kind**: instance property of [<code>InnerNode</code>](#module_model.InnerNode)  
<a name="module_model.InnerNode+attributes"></a>

#### innerNode.attributes : <code>object</code>
attributes The attributes of the node as a key-value map of strings.

**Kind**: instance property of [<code>InnerNode</code>](#module_model.InnerNode)  
<a name="module_model.InnerNode+children"></a>

#### innerNode.children : [<code>Array.&lt;Node&gt;</code>](#module_model.Node)
The children of the node.

**Kind**: instance property of [<code>InnerNode</code>](#module_model.InnerNode)  
<a name="module_model.LeafNode"></a>

### model.LeafNode
**Kind**: static class of [<code>model</code>](#module_model)  
<a name="module_model.Node"></a>

### model.Node
**Kind**: static class of [<code>model</code>](#module_model)  
<a name="module_model.Node+type"></a>

#### node.type : <code>string</code>
The type of node.

**Kind**: instance property of [<code>Node</code>](#module_model.Node)  
<a name="module_model.TextNode"></a>

### model.TextNode
A text leaf node.

**Kind**: static class of [<code>model</code>](#module_model)  

* [.TextNode](#module_model.TextNode)
    * [new TextNode(contents)](#new_module_model.TextNode_new)
    * [.contents](#module_model.TextNode+contents) : <code>string</code>

<a name="new_module_model.TextNode_new"></a>

#### new TextNode(contents)
Creates a new text node.


| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | The text contents. |

<a name="module_model.TextNode+contents"></a>

#### textNode.contents : <code>string</code>
The text contents of this node.

**Kind**: instance property of [<code>TextNode</code>](#module_model.TextNode)  
<a name="module_parse"></a>

## parse
The parse module.

<a name="module_parse.parse"></a>

### parse.parse(htmlString) ⇒ [<code>InnerNode</code>](#module_model.InnerNode)
Parses the given HTML-string to a tree representation.

**Kind**: static method of [<code>parse</code>](#module_parse)  
**Returns**: [<code>InnerNode</code>](#module_model.InnerNode) - The (root node of the) HTML tree.  

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
<a name="module_traverse"></a>

## traverse
A module for traversing and retrieving information from
an HTML-tree.


* [traverse](#module_traverse)
    * [.findAll(tree, condition)](#module_traverse.findAll) ⇒ <code>Array.&lt;(module:model.InnerNode\|module:model.LeafNode)&gt;</code>
    * [.findOne(tree, condition)](#module_traverse.findOne) ⇒ <code>module:parse.HTMLNode</code> \| <code>module:parse.TextNode</code> \| <code>module:parse.CommentNode</code> \| <code>null</code>
    * [.innerText(node)](#module_traverse.innerText) ⇒ <code>string</code>

<a name="module_traverse.findAll"></a>

### traverse.findAll(tree, condition) ⇒ <code>Array.&lt;(module:model.InnerNode\|module:model.LeafNode)&gt;</code>
Finds all nodes in the tree that satisfy the given condition
and returns those nodes in an array.

**Kind**: static method of [<code>traverse</code>](#module_traverse)  
**Returns**: <code>Array.&lt;(module:model.InnerNode\|module:model.LeafNode)&gt;</code> - The array of nodes in the tree that satisfy the condition.  

| Param | Type | Description |
| --- | --- | --- |
| tree | [<code>InnerNode</code>](#module_model.InnerNode) \| [<code>LeafNode</code>](#module_model.LeafNode) | The tree. |
| condition | [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction) | The condition, should map an `HTMLNode` to either `true` or `false`. |

<a name="module_traverse.findOne"></a>

### traverse.findOne(tree, condition) ⇒ <code>module:parse.HTMLNode</code> \| <code>module:parse.TextNode</code> \| <code>module:parse.CommentNode</code> \| <code>null</code>
Finds and returns the first node in the tree that satisfies the given
condition.

**Kind**: static method of [<code>traverse</code>](#module_traverse)  

| Param | Type | Description |
| --- | --- | --- |
| tree | <code>module:parse.HTMLNode</code> \| <code>module:parse.TextNode</code> \| <code>module:parse.CommentNode</code> | The tree. |
| condition | [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction) | The condition. |

<a name="module_traverse.innerText"></a>

### traverse.innerText(node) ⇒ <code>string</code>
Get the inner text (the text with any markup excluded)
from the given node.

**Kind**: static method of [<code>traverse</code>](#module_traverse)  
**Returns**: <code>string</code> - The text content of the node.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>module:parse.HTMLNode</code> | The node. |

<a name="module_traverse/matchers"></a>

## traverse/matchers
Match functions.


* [traverse/matchers](#module_traverse/matchers)
    * [.hasAttribute(attribute)](#module_traverse/matchers.hasAttribute) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
    * [.withAttribute(attribute, value)](#module_traverse/matchers.withAttribute) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
    * [.withTag(tag)](#module_traverse/matchers.withTag) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
    * [.MatchFunction](#module_traverse/matchers.MatchFunction) ⇒ <code>Boolean</code>

<a name="module_traverse/matchers.hasAttribute"></a>

### traverse/matchers.hasAttribute(attribute) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
Returns a matcher function that checks whether a node
has a given attribute.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction) - A function that checks whether the node has the give attribute.  

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the attribute to check. |

<a name="module_traverse/matchers.withAttribute"></a>

### traverse/matchers.withAttribute(attribute, value) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
Returns a matcher function that checks whether a node has an attribute with
the given value.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction) - A function that returns `true` if the attribute has the given value.  

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the attribute to check. |
| value | <code>string</code> | The value this attribute should have. |

<a name="module_traverse/matchers.withTag"></a>

### traverse/matchers.withTag(tag) ⇒ [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction)
Returns a matcher function that checks whether a node
has a given tag.

**Kind**: static method of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: [<code>MatchFunction</code>](#module_traverse/matchers.MatchFunction) - The matcher function.  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag to check. For example "p" for paragraphs. |

<a name="module_traverse/matchers.MatchFunction"></a>

### traverse/matchers.MatchFunction ⇒ <code>Boolean</code>
A match function that maps a node in the tree to either `true` or `false`.

**Kind**: static typedef of [<code>traverse/matchers</code>](#module_traverse/matchers)  
**Returns**: <code>Boolean</code> - Whether the node matches according to this match function.  

| Param | Type | Description |
| --- | --- | --- |
| node | [<code>Node</code>](#module_model.Node) | The node to check. |

