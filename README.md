# Conference Call
A conference call implementation using WebRTC, Socket.io and Node.js.


# Getting Started
- Run `npm ci`
- `cd src`
- `node app.js`


# Features
- Multi-participants
- Toggling of video stream
- Toggling of audio stream (mute & unmute)
- Screen sharing
- Text chat
- Mute individual participant
- Expand participants' stream
- Screen Recording
- Video Recording

 
# Demo
You can test at https://chat.1410inc.xyz.


# Note
You can create a free xirsys account and use their free ice server. You can replace the one used with your own at `src/assets/js/helpers.js`, function `getIceServer()`. The demo may not work as my xirsys account has been deactivated for reasons best known to them (perhaps the hits were too much) and I am not ready to create a new one. Create yours or look for an alternative.


# Alternative
If you prefer to use PHP Web socket (Ratchet) instead of socket.io and NodeJS, check out the PHP version [here](https://github.com/amirsanni/conference-call-ratchet).


body {
  width: 100vw;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  font-size: 16px;
  font-family: 'Rubik', sans-serif;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0.3em;
}

body .heading {
  width: 100%;
  background-color: #3a1668;
  height: 80px;
  -ms-flex-line-pack: center;
      align-content: center;
}

body .heading p {
  padding: 3em;
  color: whitesmoke;
  -ms-flex-line-pack: center;
      align-content: center;
  font-weight: 600;
  font-size: 40px;
}

body .meet {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-line-pack: justify;
      align-content: space-between;
}

body .meet .div1 {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

body .meet .div1 div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 2em;
}

body .meet .div1 div button {
  background-color: #7254b8;
}

body .meet .div2 {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

body .meet .div2 div {
  padding: 2em;
}

body .meet .div2 img {
  margin: 2em;
  width: 80%;
  border-radius: 4em;
}

body .local-video {
  position: fixed;
  width: 15vw;
}

body .mirror-mode {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

body .remote-video {
  width: 100%;
  height: auto;
  max-height: 90vh;
}
/*# sourceMappingURL=app.css.map */