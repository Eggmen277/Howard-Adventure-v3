import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCBvBE4YXFGAgu50L7sjIHtstG5aabpQyo",
  authDomain: "game-dev-project-database.firebaseapp.com",
  projectId: "game-dev-project-database",
  storageBucket: "game-dev-project-database.appspot.com",
  messagingSenderId: "978313429551",
  appId: "1:978313429551:web:da1eb3d1d6ec8da65cfcda",
  measurementId: "G-J3H0M6FG9S"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click", function(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    localStorage.setItem('Name', user.displayName);
    window.location.href = "game.html"
  }).catch((error) => {
    alert("Try Again", error.message)
  });
})