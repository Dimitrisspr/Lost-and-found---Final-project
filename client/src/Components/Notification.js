// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { requestForToken, onMessageListener } from "../Firebase";

// const Notification = () => {

  
//   const [notification, setNotification] = useState({
//     title: "You pet is found!",
//     body: "Your pet has been found!",
//   });
//   const [initialNotificationProcessed, setInitialNotificationProcessed] =
//     useState(true);
  
//  const notify = () => {
 
//   toast(<ToastDisplay />);
//  }
//   function ToastDisplay() {
//     return (
//       <div>
//         <p>
//           <b>{notification?.title}</b>
//         </p>
//         <p>{notification?.body}</p>
//       </div>
//     );
//   }

//   useEffect(() => {
//     if (initialNotificationProcessed) {
//       notify();
//     }
//   }, [notification, initialNotificationProcessed]);
//   useEffect(() => {
//     requestForToken();

//     onMessageListener()
//       .then((payload) => {
//         setNotification({
//           title: payload?.notification?.title,
//           body: payload?.notification?.body,
//         });
//         setInitialNotificationProcessed(true);
//       })
//       .catch((err) => console.log("failed: ", err));
//   }, []);
//   return <Toaster />;
// };

// export default Notification;

