var firebaseConfig = {
    apiKey: "AIzaSyDUbEbvgwISYqYLVqfRUfntMYlHy5d3mP4",
    authDomain: "lets-chat-292a8.firebaseapp.com",
    projectId: "lets-chat-292a8",
    storageBucket: "lets-chat-292a8.appspot.com",
    messagingSenderId: "92042299542",
    appId: "1:92042299542:web:e7567499362d506f281ab7",
    measurementId: "G-4LH6KY8NSB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() { room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"; }


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name -" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
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