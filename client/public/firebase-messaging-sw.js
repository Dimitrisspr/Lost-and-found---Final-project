// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBm1p6C3rBr3CFJrszKMJHmQUqHAgKdSlU",
  authDomain: "lost-and-found-2b70e.firebaseapp.com",
  projectId: "lost-and-found-2b70e",
  storageBucket: "lost-and-found-2b70e.appspot.com",
  messagingSenderId: "335347869763",
  appId: "1:335347869763:web:305cc1caca5a87d3940cf6",
  measurementId: "G-6ZXJGSE7GM",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
