import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDyKKgyPP--15DCy6H4Bve2OOe9oONTJno',
    authDomain: 'arad-expensify.firebaseapp.com',
    databaseURL: 'https://arad-expensify.firebaseio.com',
    projectId: 'arad-expensify',
    storageBucket: 'arad-expensify.appspot.com',
    messagingSenderId: '848050633444'
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase , googleAuthProvider , database as default};
