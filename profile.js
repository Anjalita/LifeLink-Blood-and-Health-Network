// Firebase configuration and initialization
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
const database = firebase.database();

function saveProfile() {
  var name = document.getElementById('profileName').value;
  var email = document.getElementById('profileEmail').value;
  var password = document.getElementById('profilePassword').value;
  var age = document.getElementById('profileAge').value;
  var gender = document.getElementById('profileGender').value;
  var bio = document.getElementById('profileBio').value;

  database.ref('users/' + email.replace('.', '_')).set({
      name: name,
      email: email,
      password: password,
      age: age,
      gender: gender,
      bio: bio
  });

  alert('Saved');
  window.location.href = 'in.html';
}

function updateProfile() {
  var email = document.getElementById('profileEmail').value;
  var name = document.getElementById('profileName').value;
  var password = document.getElementById('profilePassword').value;

  var updates = {
      name: name,
      password: password
  };

  database.ref('users/' + email.replace('.', '_')).update(updates);

  alert('Updated');
  window.location.href = 'in.html';
}

function removeProfile() {
  var email = document.getElementById('profileEmail').value;

  database.ref('users/' + email.replace('.', '_')).remove();

  alert('Deleted');
  window.location.href = 'in.html';
}

// Load the profile values from localStorage
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('profileName')) {
      document.getElementById('profileName').value = localStorage.getItem('profileName');
  }
  if (localStorage.getItem('profileEmail')) {
      document.getElementById('profileEmail').value = localStorage.getItem('profileEmail');
  }
  if (localStorage.getItem('profilePassword')) {
      document.getElementById('profilePassword').value = localStorage.getItem('profilePassword');
  }
  if (localStorage.getItem('profileBio')) {
      document.getElementById('profileBio').value = localStorage.getItem('profileBio');
  }
});
