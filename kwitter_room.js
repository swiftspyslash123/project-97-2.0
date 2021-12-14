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
document.getElementById("username").innerHTML = "welcome " + username + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname" + roomname);
                  row = "<div class = 'roomname' id = " + roomname + " onclick = 'redirectToRoomname(this.id)'>" + roomanme + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;

                  function redirectToRoomname(name) {
                        console.log(name);
                        localStorage.setItem("roomname", name);
                        window.location = "kwitter_page.html";
                  }
                  //End code
            });
      });
}
getData();

function addRoom() {
      document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}