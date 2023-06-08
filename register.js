import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { validate_email, validate_password, validate_field } from "./validator.js";


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



document.getElementById("register").addEventListener("click", function() {
  var email =  document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fullname = document.getElementById("name").value;



  // Validations
  isEmailValid = false;
  isPasswordValid = false;  
  isNameValid = false;

  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    isEmailValid = true;
  }

    // Firebase only accepts lengths greater than 6
  if (password >= 6) {
    isPasswordValid = true;
  } 
  
  if (field == null) {
    isNameValid = false;
  }

  if (field.length <= 0) {
    isNameValid = false;
  } 
  else {
    isNameValid = true;
  }



if (isEmailValid == true && isPasswordValid == true && isNameValid == true) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
  }
  else {
    alert("email or pass wrong! (use @ in email and password must be atleast 6 characters long!");
  }
});





