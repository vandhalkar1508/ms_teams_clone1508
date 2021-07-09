import helpers from './helpers.js';

window.addEventListener( 'load', () => {
    
    //when "new meeting" button is clicked
    document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        //get the room-name and user-name from user.
        let roomName = document.querySelector( '#room-name' ).value;
        let yourName = document.querySelector( '#your-name' ).value;

        if ( roomName && yourName ) {
            document.querySelector( '#err-msg' ).innerHTML = "";
            sessionStorage.setItem( 'username', yourName );
            let roomLink = `${ location.origin }?room=${ roomName.trim().replace( ' ', '_' ) }_${ helpers.generateRandomString() }`;

            //Room link will get generated and user can share it with others to join the room.
            document.querySelector( '#room-created' ).innerHTML = `Click <a href='${ roomLink }'>here</a> to enter room. 
                Share the link with others to join the meet.`;

            document.querySelector( '#room-name' ).value = '';
            document.querySelector( '#your-name' ).value = '';
        }

        else {
            //if user doesnt enter all the parameters. it gets the error message
            document.querySelector( '#err-msg' ).innerHTML = "FILL ALL THE SECTIONS";
        }
    } );


    //When the 'Enter room' button is clicked.
    document.getElementById( 'enter-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        //get the input (username from user)
        let name = document.querySelector( '#username' ).value;

        if ( name ) {
            //remove error message, if any
            document.querySelector( '#err-msg-username' ).innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem( 'username', name );

            //reload room
            location.reload();
        }

        else {
            // if user doesnt enter the name. he gets the eroor message.
            document.querySelector( '#err-msg-username' ).innerHTML = "Please enter your name";
        }
    } );



 
} );
