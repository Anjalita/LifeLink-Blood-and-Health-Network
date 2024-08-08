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
const auth = firebase.auth();
const database = firebase.database();

// Register function
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";

  if (!validateEmail(email) || !validatePassword(password)) {
    alert('Email or Password is invalid!');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const userData = {
        email: email,
        last_login: Date.now()
      };
      return database.ref('users/' + user.uid).set(userData);
    })
    .then(() => {
      alert('User Created!');
      window.location.href = "in.html";
    })
    .catch(error => {
      alert('Registration failed: ' + error.message);
      console.error('Error during registration: ', error);
    });
}

// Login function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email) || !validatePassword(password)) {
    alert('Email or Password is invalid!');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      return database.ref('users/' + user.uid).once('value');
    })
    .then(snapshot => {
      if (snapshot.exists()) {
        const userData = {
          last_login: Date.now()
        };
        return database.ref('users/' + snapshot.key).update(userData);
      } else {
        throw new Error('User does not exist in the database.');
      }
    })
    .then(() => {
      alert('User Logged In!');
      window.location.href = "in.html";
    })
    .catch(error => {
      console.error('Error during login:', error); // Detailed error logging
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please register first.');
      } else if (error.message === 'User does not exist in the database.') {
        alert('User not found in database. Please register first.');
      } else {
        alert('Login failed: ' + error.message);
      }
    });
}

// Forgot Password function
function forgotPassword() {
  const email = document.getElementById('email').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert('Password reset email sent! Please check your inbox.');
    })
    .catch(error => {
      console.error('Error during password reset:', error);
      alert('Password reset failed: ' + error.message);
    });
}

// Validation functions
function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

// Debugging function to check user state
function checkAuthState() {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in');
    }
  });
}

// Call checkAuthState to verify auth state
checkAuthState();
