### How to implement google oauth20 with passport

#### Npm Packages

- express
- mongoose
- passport
- passport-google-oauth20
- cookie-session
- ejs

##### Prerequisite

Add a keys.js file in the config folder with this code structure

```

module.exports = {
  google: {
    callbackURL: '/auth/google/redirect', // your_auth_redirect_route
    clientID: your_clientId_from_google+_api,
    clientSecret: your_clientSecret_from_google+_api

  },
  mongodb: {
    dbURI: your_mongodb_url
  },
  session: {
    cookieKey: your_cookie_key // could be any string value
  }
}

```

## Generate your google+ api data
https://console.cloud.google.com/
