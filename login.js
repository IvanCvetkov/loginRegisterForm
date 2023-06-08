import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  const firebaseConfig = {
apiKey: "AIzaSyBj6gr9hqvwSCVB_w46_JO7pxJqcfEMMQ8",
authDomain: "signup-form-62b32.firebaseapp.com",
projectId: "signup-form-62b32",
storageBucket: "signup-form-62b32.appspot.com",
messagingSenderId: "460574061522",
appId: "1:460574061522:web:a1e81f30bcbd6926338e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);



document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    var fullname = document.getElementById('fullname').value;
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      document.getElementById('login_form').style.display = 'none';
      document.getElementById('logout_div').style.display = 'block';
      document.getElementById('fullNameData').innerHTML = "name: " + fullname;
      document.getElementById('emailData').innerHTML = "email: " + email;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
  });
  

  document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      alert('Sign-out successful.');
      document.getElementById('logout_div').style.display = 'none';
      document.getElementById('login_form').style.display = 'block';
    }).catch((error) => {
      // An error happened.
      console.log('An error happened.');
    });		  		  
  });