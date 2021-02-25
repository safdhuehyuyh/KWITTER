var firebaseConfig = {
    apiKey: "AIzaSyAGI4GQYKlSSPnYwHmTIGj4ymYAaerVt_0",
    authDomain: "kwitter-fa631.firebaseapp.com",
    databaseURL: "https://kwitter-fa631-default-rtdb.firebaseio.com",
    projectId: "kwitter-fa631",
    storageBucket: "kwitter-fa631.appspot.com",
    messagingSenderId: "465343269943",
    appId: "1:465343269943:web:2b09d51f7cc22814dec3b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();