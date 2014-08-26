var duplexer = require( 'duplexer' );
var through = require( 'through' );

function Test( counter ) {
	var counts = {};
	return duplexer( through( function( row ) {
		counts[row.country] = ( counts[row.country] || 0 ) + 1;
	}, function() {
		counter.setCounts( counts );
	} ), counter );
}

module.exports = Test;