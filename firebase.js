const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-file.json');  // Replace with the actual path

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'your-project-id.appspot.com',  // Replace with your Firebase storage bucket
});

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage().bucket();

module.exports = { db, auth, storage };
