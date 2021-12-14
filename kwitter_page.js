var firebaseConfig = {
      apiKey: "AIzaSyA0HakogXwLdktAOOrnnEb-pAHdcEHyGxI",
      authDomain: "kwitter-568dc.firebaseapp.com",
      databaseURL: "https://kwitter-568dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-568dc",
      storageBucket: "kwitter-568dc.appspot.com",
      messagingSenderId: "672001043247",
      appId: "1:672001043247:web:473411a8770ea1b70d8fda"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("messgae").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg, like: 0
      });
      document.getElementById("msg").value = "";
}