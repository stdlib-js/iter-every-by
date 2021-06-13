<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# iterEveryBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether every [iterated][mdn-iterator-protocol] value passes a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-every-by
```

</section>

<section class="usage">

## Usage

```javascript
var iterEveryBy = require( '@stdlib/iter-every-by' );
```

#### iterEveryBy( iterator, predicate\[, thisArg] )

Tests whether every [iterated][mdn-iterator-protocol] value **passes** a test implemented by a `predicate` function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function predicate( v ) {
    return ( v > 0 );
}

var arr = array2iterator( [ 1, 1, 1, 1, 1 ] );

var bool = iterEveryBy( arr, predicate );
// returns true
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `true`.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function predicate() {
    return true;
}

var bool = iterEveryBy( array2iterator( [] ), predicate );
// returns true
```

A `predicate` function is provided two arguments:

-   **value**: iterated value
-   **index**: iteration index (zero-based)

To set the execution context of the `predicate` function, provide a `thisArg`.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function predicate( v ) {
    this.count += 1;
    return ( v > 0 );
}

var arr = array2iterator( [ 1, 1, 0, 1, 1 ] );

var ctx = {
    'count': 0
};

var bool = iterEveryBy( arr, predicate, ctx );
// returns false

var n = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function immediately returns upon encountering a falsy return value.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var iterEveryBy = require( '@stdlib/iter-every-by' );

function threshold( r ) {
    return ( r < 0.99 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Determine if all values are below a threshold:
var bool = iterEveryBy( riter, threshold );
// returns <boolean>

console.log( bool );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-every-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-every-by

[test-image]: https://github.com/stdlib-js/iter-every-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-every-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-every-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-every-by?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-every-by
[dependencies-url]: https://david-dm.org/stdlib-js/iter-every-by/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-every-by/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
