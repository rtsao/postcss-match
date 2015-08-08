# PostCSS Match [![Build Status][ci-img]][ci]

[PostCSS] plugin for Rust-style pattern matching.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/rtsao/postcss-match.svg
[ci]:      https://travis-ci.org/rtsao/postcss-match

```css
.blah {
  @match bar {
    foo => { color: red; },
    bar => { background: green; }
  }
}
```

```css
.blah {
  background: green
}
```

## Usage

```js
postcss([ require('postcss-match') ])
```

See [PostCSS] docs for examples for your environment.

## Differences from Rust and other known limitations

* Braces around arm expressions are non-optional
* Nested `@match` at-rules are currently unsupported
* Rust-style range patterns are currently unsupported
* Pattern exhaustiveness is not checked
* Pattern unreachability is not checked
