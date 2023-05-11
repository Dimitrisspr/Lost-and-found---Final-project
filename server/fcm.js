let FCM = require("fcm-node");
let serverKey = "AAAAThRKaEM:APA91bG0phclU84Ut5O4sD1EqW6WIhgpDfY4HbqCcUA1Cr-z7_MnO2JKyDHXmrdBE9ItA67tnM9k1RX350GCu5zr1Yos8DgOuQx15x5e1wxArE1jJQVntfJjgiZYr6w6sdhPiD0itju_";
let fcm = new FCM(serverKey);

let message = {
  to: "cgJhLN157NmmVw56dCx91y:APA91bEgKGjCgiF4Yann5ribqf3pDJeDyk8OC1gCKQCzSQXMGNjbM0S9yfjqgfJqtxu72KwiXFw3A_0SY1YRKNQX1INqxCf16n04PaWH9UTzYnrZGCp54yCX4e-UB33y9zhsvIlGSuyd",
  notification: {
    title: "Pet found",
    body: 'Your pet is found!',
  },

  data: {
    //you can send only notification or only data(or include both)
    title: "ok !",
    body: '{"name" : "ok google ogrlrl","product_id" : "123","final_price" : "0.00035"}',
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log("Something has gone wrong!" + err);
    console.log("Respponse:! " + response);
  } else {
    // showToast("Successfully sent with response");
    console.log("Successfully sent with response: ", response);
  }
});

