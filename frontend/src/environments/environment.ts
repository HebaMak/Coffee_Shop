/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'heba-salem.eu.auth0.com', // the auth0 domain prefix
    audience: 'CoffeeShop', // the audience set for the auth0 app
    clientId: 'BRQ0yfJ5IlnbqxMln0lVDrsQXXSStRFT', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};


// due to an error occurs in Auth0 
// I used these links 
// https://127.0.0.1:8100/login  ==> Application Login URI
// https://127.0.0.1:8100/logout ==> Application Logout URI
// the login page doesn't open with this link, 
// https://heba-salem.eu.auth0.com/authorize?audience=CoffeeShop&response_type=token&client_id=BRQ0yfJ5IlnbqxMln0lVDrsQXXSStRFT&redirect_uri=https://http://localhost:8100
// can you provide me with the login & logout code

// also Auth0 requires https instead of http