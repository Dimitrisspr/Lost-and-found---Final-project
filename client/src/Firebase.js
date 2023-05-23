import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBm1p6C3rBr3CFJrszKMJHmQUqHAgKdSlU",
  authDomain: "lost-and-found-2b70e.firebaseapp.com",
  projectId: "lost-and-found-2b70e",
  storageBucket: "lost-and-found-2b70e.appspot.com",
  messagingSenderId: "335347869763",
  appId: "1:335347869763:web:305cc1caca5a87d3940cf6",
  measurementId: "G-6ZXJGSE7GM",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

var fcmid = ''

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BDjiKhnU10ClKktNZQ8KYOnTbO4BRJIuFDUP9EBnOt5LF2RlhlCQMusRTC4EMEFcd0IPQMRKUDN_TD-cej5EWKc",
  })
    .then((currentToken) => {
      if (currentToken) {
        fcmid = currentToken;
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

export  {fcmid};


