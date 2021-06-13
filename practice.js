// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqrhgAjY_ARhBW_RbJwWXMttAQ3sXzbLQ",
  authDomain: "kwitter-b24e3.firebaseapp.com",
  databaseURL: "https://kwitter-b24e3-default-rtdb.firebaseio.com",
  projectId: "kwitter-b24e3",
  storageBucket: "kwitter-b24e3.appspot.com",
  messagingSenderId: "76325781687",
  appId: "1:76325781687:web:e9429e0ca9114843e3cd32",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user",
  });
}
