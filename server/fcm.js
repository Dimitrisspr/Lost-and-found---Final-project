let FCM = require("fcm-node");
let serverKey = "BH5CtbVUa5l9h6NKyO20mrpTxWsWZXW0TVeIzgtmbeph5a7q-KQp4POVlxaa6JsE3rAk_XJtS0rQdJfVjA-WMZM";
let fcm = new FCM(serverKey);

let message = {
  to: "<DEVICE_TOKEN>",
  notification: {
    title: "Notification TestAPP",
    body: '{"Message from node js app"}',
  },

  data: {
    //you can send only notification or only data(or include both)
    title: "ok cdfsdsdfsd",
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
