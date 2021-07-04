# gulp-apply

Apply function on stream.

## Installation

```
  $ npm install --save-dev pekeq/gulp-apply
```

## Usage

```js
const { src } = require('gulp');
const hash = require('gulp-hash');

exports.default = function() {
  return src('src/images/**')
    .pipe(apply((file) => {
      return file;
    }))
    .pipe(...)
}
```

If you're going to use `this.push(...)`, do not use arrow function.

```js
const { src } = require('gulp');
const hash = require('gulp-hash');

exports.default = function() {
  return src('src/images/**')
    .pipe(apply(function (file) => {
      this.push(file);
    }))
    .pipe(...)
}
```

## API

## License

MIT

(c) Hideo Matsumoto
