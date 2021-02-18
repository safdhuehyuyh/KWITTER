//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const config= {
    apiKey: "AIzaSyB7vw9jeNCEkhMGlYGFPVQbzrjUev1SrEY",
  authDomain: "kwitter-c5700.firebaseapp.com",
  databaseURL: "https://kwitter-c5700-default-rtdb.firebaseio.com",
  projectId: "kwitter-c5700",
  storageBucket: "kwitter-c5700.appspot.com",
  messagingSenderId: "861444040922",
  appId: "1:861444040922:web:ef03eda039947753aa1de3"
};
// Initialize Firebase
firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();