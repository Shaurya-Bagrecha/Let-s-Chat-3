
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCSSBfGLo2ooPFW-SNtEQCVs_mnkayAFXU",
      authDomain: "web-app-93.firebaseapp.com",
      databaseURL: "https://web-app-93-default-rtdb.firebaseio.com",
      projectId: "web-app-93",
      storageBucket: "web-app-93.appspot.com",
      messagingSenderId: "56000011452",
      appId: "1:56000011452:web:ad46fffa73bfa45e6fc4b9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name") ;

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;

function addRoom()
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update(
            {
                  purpose : "adding room name"
            }
      );

localStorage.setItem("room_name" , room_name );
window.location = "kwitter_page.html";

}

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room name is = " + Room_names );
      
      row = "<div class='room_name' id="+Room_names + " onclick = 'redirectToRoomName(this.id)' > # " + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;



      });
            });
                  }      
getData();

function redirectToRoomName(name)
 {

      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
            
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}