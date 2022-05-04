const firebaseConfig = {
  apiKey: "AIzaSyAKOp4XS89uzwbtKrx-oni2coxDoKpbP54",
  authDomain: "bfshelter-5b166.firebaseapp.com",
  projectId: "bfshelter-5b166",
  storageBucket: "bfshelter-5b166.appspot.com",
  messagingSenderId: "351174553334",
  appId: "1:351174553334:web:a239b0c4a992150b0f86d7",
  databaseURL: "https://bfshelter-5b166-default-rtdb.firebaseio.com",
};


const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;

 detailsRef.push().set({
 email: email,
 password: password,
 });

} 
