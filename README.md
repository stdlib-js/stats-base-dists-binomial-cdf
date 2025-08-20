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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_cdf" align="center" raw="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" alt="Cumulative distribution function for a Binomial distribution."> -->

```math
F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;n,p) = \sum_{i=0}^{\lfloor x \rfloor} {n\choose i}p^i(1-p)^{n-i}" data-equation="eq:binomial_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf.svg" alt="Cumulative distribution function for a Binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability. The CDF can be equivalently expressed as

<!-- <equation class="equation" label="eq:binomial_cdf_incomplete_beta" align="center" raw="F(x;n,p) = I_{1-p}( n-x, x+1 )" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function."> -->

```math
F(x;n,p) = I_{1-p}( n-x, x+1 )
```

<!-- <div class="equation" align="center" data-raw-text="F(x;n,p) = I_{1-p}( n-x, x+1 )" data-equation="eq:binomial_cdf_incomplete_beta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/cdf/docs/img/equation_binomial_cdf_incomplete_beta.svg" alt="Cumulative distribution function for a Binomial distribution expressed using the incomplete beta function.">
    <br>
</div> -->

<!-- </equation> -->

where `I` is the [lower regularized incomplete beta function][incomplete-beta].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cdf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-cdf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cdf = require( 'path/to/vendor/umd/stats-base-dists-binomial-cdf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-cdf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cdf;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-cdf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 20.0, opts );
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, n: %0.4f, p: %0.4f, F(x;n,p): %0.4f', x, n, p, cdf );

})();
</script>
</body>
</html>
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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-cdf/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[incomplete-beta]: https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function

</section>

<!-- /.links -->
