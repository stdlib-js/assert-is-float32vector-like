/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var ndarray = require( '@stdlib/ndarray-ctor' );
var Float32Array = require( '@stdlib/array-float32' );
var pkg = require( './../package.json' ).name;
var isFloat32VectorLike = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var strides;
	var offset;
	var buffer;
	var values;
	var shape;
	var order;
	var bool;
	var arr;
	var i;

	buffer = new Float32Array( [ 0, 0, 0, 0 ] );
	shape = [ 4 ];
	strides = [ 1 ];
	offset = 0;
	order = 'row-major';

	arr = ndarray( 'float32', buffer, shape, strides, offset, order );

	values = [
		arr,
		[ 1, 2, 3 ],
		null,
		5,
		'beep'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isFloat32VectorLike( values[ i%values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
