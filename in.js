let ok = 3;
console.log("ok")
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  document.getElementById("get").onclick = function(){
   
    var username = document.getElementById('username').value
    console.log("ok")
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()

   // alert(data.email)
    document.getElementById("count").innerHTML = data.email;
    console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
    //console.log(data.favourite_food);
  
    })
  }


  function get() {
    var username = document.getElementById('username').value
    console.log("ok")
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      document.getElementById("count").innerHTML = data.email;
     // alert(data.email)
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
