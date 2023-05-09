import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const messaging = getMessaging();

const firebaseConfig = {
  apiKey: "AIzaSyBm1p6C3rBr3CFJrszKMJHmQUqHAgKdSlU",
  authDomain: "lost-and-found-2b70e.firebaseapp.com",
  projectId: "lost-and-found-2b70e",
  storageBucket: "lost-and-found-2b70e.appspot.com",
  messagingSenderId: "335347869763",
  appId: "1:335347869763:web:305cc1caca5a87d3940cf6",
  measurementId: "G-6ZXJGSE7GM",
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
function requestPermission() {
  console.log("Requesting permission...");

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BOQ25yir8vHhXxuwD21dmx6puHgEtidq6BJgthAHPxmT70q-hPi68WXdtzHA-fBVoA3HROqvicU23joboHDqi6s",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      });
    } else {
      console.log("No permission");
    }
  });
}

requestPermission();
