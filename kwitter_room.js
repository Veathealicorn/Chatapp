//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCDgxK0KhkUKvtwB5JOy9F8_xrWp9tqZDk",
      authDomain: "chat-arena-9841a.firebaseapp.com",
      databaseURL: "https://chat-arena-9841a-default-rtdb.firebaseio.com",
      projectId: "chat-arena-9841a",
      storageBucket: "chat-arena-9841a.appspot.com",
      messagingSenderId: "880432075782",
      appId: "1:880432075782:web:5805f3615e3048ecd11f87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
password = document.getElementById("password").value;

function addRoom() {
      password = document.getElementById("password").value;

      firebase.database().ref("/").child(user_name).update({
            password: password
      });

      if (password == "BtsarmylifeBlackpinkblinglife") {


            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  prupose: "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
