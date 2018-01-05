/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.94b16e58cd9b41bbbf923a855ed07c47',
    clientSecret: '99b3538c828771b4b0be0d7860fa8cf92d95022da0fa601e7e3f4aa883c19bfc',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: 'C:\\code\\Github\\sandbox\\alexa\\alexa-avs-sample-app\\samples\\javaclient\\certs\\server\\node.key',
    sslCert: 'C:\\code\\Github\\sandbox\\alexa\\alexa-avs-sample-app\\samples\\javaclient\\certs\\server\\node.crt',
    sslCaCert: 'C:\\code\\Github\\sandbox\\alexa\\alexa-avs-sample-app\\samples\\javaclient\\certs\\ca\\ca.crt',
    products: {
        "EvieAlexa": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
