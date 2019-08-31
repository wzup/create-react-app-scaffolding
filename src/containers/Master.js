import React, { PureComponent } from 'react';
import { DONE_SUCCESS } from "../reducers/constants";
import { credentials as creds, uri } from '../config';

class Master extends PureComponent {

  loadFb = () => {
    const {instagram: {graphApi: {appId, version}}} = creds;
    let FB = {};

    window.fbAsyncInit = () => {
      FB = window.FB;

      if(typeof FB === 'undefined') {
        console.error('[ERROR NO FB]');
        return;
      }

      console.log(this.constructor.name, '[loadFB][FB]', FB);

      FB.init && FB.init({
        appId: appId,
        autoLogAppEvents: true,
        xfbml: false,
        version: version
      });

      FB.getLoginStatus(response => {
        console.log('[getLoginStatus]', response);

        console.log(this.constructor.name, '[loadFB][FB.getLoginStatus]', FB);

        if(response.status !== 'connected') {
          console.warn('[NOT CONNECTED TO FB]');
          return;
        }

        const lStorage = window.localStorage;
        const userID = response.authResponse.userID;
        let pageID = '';
        let igBizUserID = '';

        lStorage.setItem(userID + ':user_accessToken', response.authResponse.accessToken);
      });
    }
  };

  loadInstaApi = () => {
    const {instagram: {apiKey, clientID, clientSecret, authorizationUrl}} = creds;
    fetch(authorizationUrl, {
      method: 'get'
    }).then(response => response.text())
      .then(json => {
        console.log('json', json);
        this.setState({
          isInstaApiReady: true,
          instaAuthForm: json
        })
      })
      .catch(err => {
        console.log('ERR', err);
      })
  };

  loadYTApi = () => {
    const {youtube: {apiKey, clientID, clientSecret}} = creds;
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      const gapi = window.gapi;
      console.log('gapi', gapi);
      gapi.load('client', () => {
        gapi.client.init({
          'apiKey': apiKey,
          'clientId': clientID,
          'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
          'scope': 'https://www.googleapis.com/auth/yt-analytics.readonly',
        })
          .then(() => {
            this.setState({
              isYTApiReady: true
            })
          })
          .catch(err => {
            console.log('ERR', err)
          })
      });
    };

    document.body.appendChild(script);
  };

  componentDidMount() {
    console.log(this.constructor.name, '[componentDidMount]');
  }

  componentWillMount() {
    console.log(this.constructor.name, '[componentWillMount]');
  }

  render() {
    return (
      <main style={{height: '100%'}}
            className={'musesapp version'}
            role='main'
      >
        {this.props.children}
      </main>
    );
  }
}

export default Master;
