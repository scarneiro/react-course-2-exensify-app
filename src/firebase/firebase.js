import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const extractExpenses = (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()  
//     });
//   }); 
//   return expenses;
// }

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(extractExpenses(snapshot));
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     console.log(extractExpenses(snapshot));
//   })

// database.ref('expenses').push({
//   description: 'First expense',
//   note: '',
//   amount: 1000,
//   createdAt: 1000
// });


// database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}. `);
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Sebastian Carneiro',
//   age: 46, 
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//       city: 'Quilmes',
//       country: 'Argentina'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// }); 

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//   console.log('child removed!');
// }).catch((e) => {
//   console.log('child removal failed!');
// });