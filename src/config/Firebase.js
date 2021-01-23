import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDLcP0IMTH4d5UubNQiCaFmf5qboAeY5_U",
    authDomain: "reduxpro1.firebaseapp.com",
    databaseURL: "https://reduxpro1-default-rtdb.firebaseio.com",
    projectId: "reduxpro1",
    storageBucket: "reduxpro1.appspot.com",
    messagingSenderId: "421023864667",
    appId: "1:421023864667:web:0a2ed3f57fb0e7b93aec7e",
    measurementId: "G-PYLQDH74ZW"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export{
    storage, firebase as default
  }