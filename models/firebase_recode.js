'use strict'

import firebase from 'firebase';
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export default class FirebaseRecode {

  firebasePath = "";
  id = 0;

  constructor() {
  }

  static find(path, id, callback) {
    let ret = {};
    database.ref(path + id).once('value').then((data) => {
      if(data.exists()) {
        callback(data.val());
      }
    });
  }

  getValues() {
    return {};
  }

  save() {
    if(this.firebasePath == "") { return false; }
    if(this.id == 0) { return false; }
    database.ref(
      this.firebasePath + this.id
      ).set(this.getValues());
    return true; 
  }
}