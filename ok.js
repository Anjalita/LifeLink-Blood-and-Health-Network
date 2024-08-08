let ok =3;
console.log("ik")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl17zNeEBsyCi0SmD83EXWzOMDynu-Ro0",
  authDomain: "blood-and-hospital-finder-main.firebaseapp.com",
  databaseURL: "https://blood-and-hospital-finder-main-default-rtdb.firebaseio.com",
  projectId: "blood-and-hospital-finder-main",
  storageBucket: "blood-and-hospital-finder-main.appspot.com",
  messagingSenderId: "746429696511",
  appId: "1:746429696511:web:2b435c8e0633fe32537fca",
  measurementId: "G-DD0CX3HH6W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

  
  function get() {
    var username = 11;
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      //alert(data.email)
      document.getElementById("count").innerHTML = data.email;
      document.getElementById("count2").innerHTML = data.password;
      document.getElementById("count3").innerHTML = data.username;
      document.getElementById("count4").innerHTML = data.say_something;
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
 
 get();

 document.getElementById("Blood").onclick = function(){
  window.location.href="a.html"
 }