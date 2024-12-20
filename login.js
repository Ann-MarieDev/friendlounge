// login.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config"; // Import the initialized Firebase app

const auth = getAuth(app); // Get authentication instance

// Get DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("login-form");
const loginStatus = document.getElementById("login-status");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  loginStatus.innerText = "Logging in...";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully logged in
      loginStatus.innerText = "Login successful! Redirecting...";

      // Redirect to home page after successful login
      setTimeout(() => {
        window.location.href = "home.html"; // Redirect to home page
      }, 1000); // Wait a second before redirect
    })
    .catch((error) => {
      loginStatus.innerText = "Login failed. Please try again.";
      console.error("Login error:", error.message);
    });
});
