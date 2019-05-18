# Prototype Storm

Supercharge your Javascript!

## Summary

- [About](#about)
- [Installation](#installation)
- [Prototypes documentation](#prototypes-documentation)
- [Usage](#usage)

## About

I created this library because I saw on StackOverflow and Dev.to people using Underscore.js and Loadash. After I took a look, I thought "why do they use functional programming, while Javascript has this inner power with chainable prototypes?".

For many, the issue was to keep Javascript immutable, for others it was that Prototypes are "unsafe" because they could broke existing function. None of those explaination convinced me, because prototypes are immutable by default, and I can manage to not break existing function by checking if the prototype already exist or not in the object.

So I decided to give it a try.

## Installation

With NPM:

```bash
npm install @khalyomede/prototype-storm@0.*
```

## Usage

- [With Node](#with-node)

### With Node

You can either do tree shaking over the prototypes you which to take:

```javascript
import { max, radians, absolute } from "@khalyomede/prototype-storm"; // Supercharge the object Number with "radians", and "absolute", and the object Array with "max", so do not use those variables directly

const numbers = [-12, -41, -87];

numbers
	.max() // -12
	.radians() // -0.20943951
	.absolute(); // 0.20943951
```

Or import the whole prototypes:

```javascript
import "@khalyomede/prototype-storm"; // Everything objects have been supercharged!
```
