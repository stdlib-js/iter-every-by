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

var tape = require( 'tape' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var noop = require( '@stdlib/utils-noop' );
var iterEveryBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterEveryBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterEveryBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterEveryBy( array2iterator( [ 1, 2, 3 ] ), value );
		};
	}
});

tape( 'if provided an "empty" iterator, the function returns `true`', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [] );
	bool = iterEveryBy( arr, predicate );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();

	function predicate() {
		return true;
	}
});

tape( 'the function returns `true` if every iterated value passes a test implemented by a predicate function', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [ 1, 1, 1, 1, 1 ] );
	bool = iterEveryBy( arr, predicate );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'the function returns `false` if at least one iterated value fails a test implemented by a predicate function', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [ 1, 1, 0 ] );
	bool = iterEveryBy( arr, predicate );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var bool;
	var arr;
	var ctx;

	ctx = {
		'count': 0
	};

	arr = array2iterator( [ 1, 1, 1, 0, 1 ] );
	bool = iterEveryBy( arr, predicate, ctx );

	t.strictEqual( bool, false, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v > 0 );
	}
});
