//get all the needed packages and libraries
const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );
const stream = require( './assets/js/stream' );
const path = require( 'path' );

const port = process.env.port ||5000;

app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

//render the html file on the root
app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );

io.of( '/stream' ).on( 'connection', stream );

server.listen( port);

