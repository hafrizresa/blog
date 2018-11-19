import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBub-M9fxR71bE_VXPPKwJpEB7rwE9IU8w",
    authDomain: "blog-655c3.firebaseapp.com",
    databaseURL: "https://blog-655c3.firebaseio.com",
    projectId: "blog-655c3",
    storageBucket: "blog-655c3.appspot.com",
    messagingSenderId: "468574772867"
  };
  
  
const firebaseapp= firebase.initializeApp(config)
export default firebase.database()

