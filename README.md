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
