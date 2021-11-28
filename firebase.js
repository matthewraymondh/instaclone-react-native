import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBkPMS6DOG5UpDODBrCWuPdKamMjkmGqeU',
  authDomain: 'instaclone-dev-react-native.firebaseapp.com',
  projectId: 'instaclone-dev-react-native',
  storageBucket: 'instaclone-dev-react-native.appspot.com',
  messagingSenderId: '881620618244',
  appId: '1:881620618244:web:a04139f962519b2be03951',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase, db}