# Micro-parse

_Micro-parse_ is a tiny HTML parser, written in JavaScript. 

It is hobby project to hone my own JavaScript skills, so use it at your own risk.

## Examples

### Getting the text of all paragraphs within a document
```js
const { parse } = require( "micro-parse/parse" );
const { findAll, innerText } = require( "micro-parse/traverse" );
const { withTag } = require( "micro-parse/traverse/matchers" );

const htmlString = `<div>
    <h1>Title</h1>
    <p>Introduction.</p>
    <h2>Subheading</h2>
    <p>Text.</p>
</div>`;

const tree = parse( htmlString );
// Find all paragraphs within the HTML.
const paragraphs = findAll( tree, withTag( "p" ) );
// Grab the inner text of the found paragraphs.
const texts = paragraphs.map( innerText );

console.log( texts ); // [ "Introduction.", "Text." ]
```

## Documentation

The API documentation can be found within [the docs folder in this repository](./docs).

## Developing

### Useful commands

#### Installing dependencies
``` 
yarn install
```

#### Building source code
```
yarn build
```

#### Running tests
``` 
yarn test
```

#### Generating docs
```
yarn docs
```

