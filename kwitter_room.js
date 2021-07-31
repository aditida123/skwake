
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyD0L0zoqlYZUkXDlHUZDyBHlqh3WCSwYz8",
      authDomain: "kwitter-47ea0.firebaseapp.com",
      databaseURL: "https://kwitter-47ea0-default-rtdb.firebaseio.com",
      projectId: "kwitter-47ea0",
      storageBucket: "kwitter-47ea0.appspot.com",
      messagingSenderId: "87206338092",
      appId: "1:87206338092:web:10295b4fc2ed4361023b89",
      measurementId: "G-BLJRED19L7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      //End code
      });});}
getData();
