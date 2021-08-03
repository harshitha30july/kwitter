
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBW8uOndUmOK282inmb7-FR6w3CleSJs7I",
      authDomain: "kwitter-c007a.firebaseapp.com",
      databaseURL: "https://kwitter-c007a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c007a",
      storageBucket: "kwitter-c007a.appspot.com",
      messagingSenderId: "923474026728",
      appId: "1:923474026728:web:8c9f87152d5f06f871e95d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

    function addRoom()
    {
         room_name=document.getElementById("room_name").value; 

         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room"
         });

         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name: "+Room_names);
      row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomname(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      

      //End code
      });});}
getData();

function redirectToRoomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
