// Firebase configuration (replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Switch to Sign Up form
  document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('signin-error').innerText = ''; // Clear error messages
  });
  
  // Switch to Sign In form
  document.getElementById('show-signin').addEventListener('click', () => {
    document.getElementById('sign-in-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('signup-error').innerText = ''; // Clear error messages
  });
  
  // Handle Sign In
  document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
        window.location.href = 'home.html'; // Redirect to home page after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        document.getElementById('signin-error').innerText = `Error: ${errorMessage}`;
      });
  });
  
  // Handle Sign Up
  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);
        window.location.href = 'home.html'; // Redirect to home page after successful sign up
      })
      .catch((error) => {
        const errorMessage = error.message;
        document.getElementById('signup-error').innerText = `Error: ${errorMessage}`;
      });
  });
  