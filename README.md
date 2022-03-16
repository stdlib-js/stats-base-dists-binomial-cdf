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

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_cdf" align="center" raw="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" alt="Cumulative distribution function for a Binomial distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" data-equation="eq:binomial_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf.svg" alt="Cumulative distribution function for a Binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability. The CDF can be equivalently expressed as

<!-- <equation class="equation" label="eq:binomial_cdf_incomplete_beta" align="center" raw="F(x;n,p) = I_{1-p}( n-x, x+1 )" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function."> -->

<div class="equation" align="center" data-raw-text="F(x;n,p) = I_{1-p}( n-x, x+1 )" data-equation="eq:binomial_cdf_incomplete_beta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf_incomplete_beta.svg" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function.">
    <br>
</div>

<!-- </equation> -->

where `I` is the [lower regularized incomplete beta function][incomplete-beta].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-binomial-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-binomial-cdf' );
```

#### cdf( x, n, p )

Evaluates the [cumulative distribution function][cdf] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = cdf( 3.0, 20, 0.2 );
// returns ~0.411

y = cdf( 21.0, 20, 0.2 );
// returns 1.0

y = cdf( 5.0, 10, 0.4 );
// returns ~0.834

y = cdf( 0.0, 10, 0.4 );
// returns ~0.006
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 20, 0.5 );
// returns NaN

y = cdf( 0.0, NaN, 0.5 );
// returns NaN

y = cdf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1.5, 0.5 );
// returns NaN

y = cdf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 20, -1.0 );
// returns NaN

y = cdf( 2.0, 20, 1.5 );
// returns NaN
```

#### cdf.factory( n, p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mycdf = cdf.factory( 10, 0.5 );

var y = mycdf( 3.0 );
// returns ~0.172

y = mycdf( 1.0 );
// returns ~0.011
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var cdf = require( '@stdlib/stats-base-dists-binomial-cdf' );

var i;
var n;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 20.0;
    n = round( randu() * 100.0 );
    p = randu();
    y = cdf( x, n, p );
    console.log( 'x: %d, n: %d, p: %d, F(x;n,p): %d', x.toFixed( 4 ), n, p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-cdf/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[incomplete-beta]: https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function

</section>

<!-- /.links -->
