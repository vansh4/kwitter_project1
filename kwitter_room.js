var firebaseConfig = {
      apiKey: "AIzaSyDWFK444VMQxHU6G4GUKoLv4I18G58CKHE",
      authDomain: "kwitter-22052.firebaseapp.com",
      databaseURL: "https://kwitter-22052-default-rtdb.firebaseio.com",
      projectId: "kwitter-22052",
      storageBucket: "kwitter-22052.appspot.com",
      messagingSenderId: "935188887583",
      appId: "1:935188887583:web:7c789a1fdc32dfd460bd2a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
