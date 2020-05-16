import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDhbgtUVD50KeWR6l8AEiKPHHfcbODTprE",
  authDomain: "photowall2-bfe09.firebaseapp.com",
  databaseURL: "https://photowall2-bfe09.firebaseio.com",
  projectId: "photowall2-bfe09",
  storageBucket: "photowall2-bfe09.appspot.com",
  messagingSenderId: "775183162914",
  appId: "1:775183162914:web:49bc197bcd5b2022b9747b"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { database }

