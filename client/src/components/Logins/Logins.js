import React, { useState, useEffect } from 'react';
// import SpotifyLogin from 'react-spotify-login';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import {theMovieDb, spotifyClientID} from '../../api-keys';
import LoginYoutube from './LoginYoutube';
import ReactDom from 'react-dom';
import './logins.css';



function Logins() {

  const [tokenSpotify, setTokenSpotify] = useState();
  const [spotifyUserId, setSpotifyUserId] = useState();
  const hist = createBrowserHistory;

  if (tokenSpotify && !spotifyUserId) {
    getSpotifyUserId(tokenSpotify).then((user) => setSpotifyUserId(user.id));
  }

  const onSuccessSpotify = response => setTokenSpotify(response.access_token);
  const onFailureSpotify = response => console.error(response);


  const loginAgain = () => {
    return setTokenSpotify();
  };

  return (

    <div className="Logins">
      {!token && <SpotifyLogin clientId={spotifyClientID}

      redirectUri="http://localhost:3000/"
      onSuccess={onSuccessSpotify}
      onFailure={onFailureSpotify}/>}

      {token && <button  className="loginButton"  onClick={loginAgain}>Logout</button>}
      {token && <p data-testid='test-paragraph'>Spotify logged in <span role='img' aria-label="rock">🤘</span></p>}

       
     
    </div>
  );
}



export default Logins;
