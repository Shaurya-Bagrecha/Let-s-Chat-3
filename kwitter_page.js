//YOUR FIREBASE LINKS

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

function send() 
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push(
          {
                name: user_name,
                message: msg,
                like: 0 , 
                
    }      );

    document.getElementById("msg").value = "" ; 
    
}


function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

       firebase_message_id = childKey;
       message_data = childData;
//Start code

console.log(firebase_message_id);

//End code
    } });  }); }
getData();

function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
}
