# PostCSS Match [![Build Status][ci-img]][ci]

[PostCSS] plugin for Rust-style pattern matching.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/rtsao/postcss-match.svg
[ci]:      https://travis-ci.org/rtsao/postcss-match
[postcss-simple-vars]: https://github.com/postcss/postcss-simple-vars

```css
.blah {
  @match baz {
    foo => { color: red; },
    bar | baz => { background: green; }
  }
}
```

```css
.blah {
  background: green
}
```

In conjunction with [postcss-simple-vars]:

```css
$animal: bear;

.zoo {
  @match $animal {
    snake => { color: green; },
    buffalo | bear => { background: brown; },
    lion => { font-weight: bold; },
    _ => {
      font-style: italic;
      color: gray;
    }
  }
}
```

```css
.zoo {
  background: brown
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
