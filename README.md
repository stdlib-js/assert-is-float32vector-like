<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isFloat32VectorLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object containing single-precision floating-point numbers.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-float32vector-like
```

</section>

<section class="usage">

## Usage

```javascript
var isFloat32VectorLike = require( '@stdlib/assert-is-float32vector-like' );
```

#### isFloat32VectorLike( value )

Tests if a value is a 1-dimensional [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `float32`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var ndarray = require( '@stdlib/ndarray-ctor' );

var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

var bool = isFloat32VectorLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray-ctor' );
var Float32Array = require( '@stdlib/array-float32' );
var isFloat32VectorLike = require( '@stdlib/assert-is-float32vector-like' );

var buffer = new Float32Array( [ 0, 0, 0, 0 ] );
var arr = ndarray( 'float32', buffer, [ 4 ], [ 1 ], 0, 'row-major' );

var out = isFloat32VectorLike( arr );
// returns true

out = isFloat32VectorLike( [ 1, 2, 3, 4 ] );
// returns false

out = isFloat32VectorLike( {} );
// returns false

out = isFloat32VectorLike( null );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-float32vector-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-float32vector-like

[test-image]: https://github.com/stdlib-js/assert-is-float32vector-like/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-float32vector-like/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-float32vector-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-float32vector-like?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-float32vector-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-float32vector-like/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-float32vector-like/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

</section>

<!-- /.links -->
