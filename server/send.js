// const { initializeApp } = require("firebase-admin/app");
// const app = initializeApp();

// let admin = require("firebase-admin");

// let serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const registrationToken =
//   "cgJhLN157NmmVw56dCx91y:APA91bGY8fgMniVo5b88pi8yYSYJZDZ1-S5eyg3Q8KD1EbYRWKVGcKU0c8fMtn11breYWV1vmTd1rGTLJM1IzOpCn8jZJaLCsWcgaMgSqWEUdS61zofNV4AVDBDD7aBj-bb4o71laIMy";

// const message = {
//   data: {
//     score: "850",
//     time: "2:45",
//   },
//   token: registrationToken,
// };

// // Send a message to the device corresponding to the provided
// // registration token.
// getMessaging(app)
//   .send(message)
//   .then((response) => {
//     // Response is a message ID string.
//     console.log("Successfully sent message:", response);
//   })
//   .catch((error) => {
//     console.log("Error sending message:", error);
//   });

// admin
//   .messaging()
//   .send(message)
//   .then((response) => {
//     console.log("Successfully sent message:", response);
//   })
//   .catch((error) => {
//     console.log("Error sending message:", error);
//   });

// admin.initializeApp();
