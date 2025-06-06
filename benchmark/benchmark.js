/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var cdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var opts;
	var n;
	var p;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 100.0, opts );
	n = discreteUniform( 100, 1, 100, opts );
	p = uniform( 100, 0, 1, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cdf( x[ i % x.length ], n[ i % n.length ], p[ i % p.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mycdf;
	var opts;
	var n;
	var p;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 80.0, opts );

	n = 80;
	p = 0.4;
	mycdf = cdf.factory( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mycdf( x[ i % x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
