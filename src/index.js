const functions = require('firebase-functions');
import { app } from './app';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

export const expressRESTAPI = functions.https.onRequest(app);