
const config = {
  env: 'production'
};

switch (true) {
  case window.location.hostname.includes('dev.'):
    config.env = 'development';
    break;
  case window.location.hostname.includes('prod.'):
    break;
  case window.location.hostname.includes('test.'):
    break;
  default:
}

export const domain = 'musesapp.com';
export const port = 3000;
export const protocol = 'http';
export const uri = protocol + '://' + domain + ':' + port;

export const credentials = {
  youtube: {
    apiKey: 'AIzaSyDot4JPDWlyXjOlpOcMM1pUvFRz8t0c3as',
    clientID: '939194766608-op7o5jnvlvkhq09u9o17tv7bbq9383sm.apps.googleusercontent.com',
    clientSecret: 'oqfCCAaZMcjnyq3dIiv5OOuP'
  },
  instagram: {
    platform: {
      apiKey: '',
      clientID: '232ff133131b4e949a70fb360e4215cf',
      clientSecret: '',
      redirectUri: uri + '/auth/instagram/callback',
      get authorizationUrl() {
        return 'https://api.instagram.com/oauth/authorize/?client_id=' +
          this.clientID + '&redirect_uri=' + this.redirectUri + '&response_type=token'
      }
    },
    graphApi: {
      baseUrl: 'https://graph.facebook.com',
      successUrl: '/auth/success',
      appId: '582665358879640',
      version: 'v3.3'
    },
  }
};

export default config;
