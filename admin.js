const admin = require('firebase-admin');

// Path to your service account key file
const serviceAccount = require('./path/to/your/firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com" // Replace with your Firebase Realtime Database URL
});

// Now you can interact with Firebase Admin SDK, e.g., for user management
const auth = admin.auth();

// Example: Create a new user
auth.createUser({
  email: 'user@example.com',
  emailVerified: false,
  password: 'secretPassword',
  displayName: 'John Doe',
  disabled: false
})
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
